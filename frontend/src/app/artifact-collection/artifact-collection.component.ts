import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArtifactService } from '../artifact.service';
import { Artifact, Category, ArtifactCategoryRelationship } from '../data-structures';
import { ArtifactViewComponent } from '../artifact-view/artifact-view.component';
import { ArtifactFormComponent } from '../artifact-form/artifact-form.component';
import { MatSnackBar } from '@angular/material';
import { EditArtifactFormComponent } from '../edit-artifact-form/edit-artifact-form.component';
import { DeleteWarningComponent } from './delete-warning/delete-warning.component';

@Component({
    selector: 'app-artifact-collection',
    templateUrl: './artifact-collection.component.html',
    styleUrls: ['./artifact-collection.component.css'],
})
export class ArtifactCollectionComponent implements OnInit {

    artifacts: Artifact[];
    filteredArtifacts: Artifact[];
    searchedArtifacts: Artifact[];
    sortedArtifacts: Artifact[];

    //temp
    familyId = "family";
    userId = "user";

    categories: Category[];
    filters: Category[] = [];
    newCategory: String;

    acRelations: ArtifactCategoryRelationship[];

    searchTerms = [];

    //used by search bar
    searchText = "";

    sortOption = "added";

    isEditMode = false;

    constructor(
        public dialog: MatDialog,
        private artifactService: ArtifactService,
        private snackBar: MatSnackBar,
    ) { }


    ngOnInit() {
        this.artifactService.getArtifacts().subscribe(artifacts => this.artifacts = artifacts);
        this.artifactService.getArtifacts().subscribe(artifacts => this.filteredArtifacts = artifacts);
        this.artifactService.getArtifacts().subscribe(artifacts => this.sortedArtifacts = artifacts);
        this.artifactService.getCategories().subscribe(categories => this.categories = categories);
        this.artifactService.getCategoryRelationships().subscribe(acRelations => this.acRelations = acRelations);
        this.newCategory = "";
    }

    includeFilter(filter) {
        var i = this.filters.indexOf(filter);
        if (i > -1) {
            this.filters.splice(i, 1);
        } else {
            this.filters.push(filter);
        }
        this.updateArtifacts();
    }

    updateArtifacts() {
        this.filteredArtifacts = this.artifacts.filter(x => (this.isFiltered(x)));
        this.sortArtifacts();
    }

    isFiltered(x: Artifact) {
        for (var filter of this.filters) {
            for (var relation of this.acRelations) {
                if (filter._id != relation.categoryId && x._id == relation.categoryId) {
                    return false;
                }
            }
        }

        if (this.searchTerms[0]) {
            for (var term of this.searchTerms) {
                if (term && (x.name.toLowerCase().includes(term) || x.description.toLowerCase().includes(term))) {
                    return true;
                }
            }
        } else {
            return true;
        }

        return false;
    }
    
    search(text: String) {
        this.searchTerms = text.split(" ");
        this.updateArtifacts();
    }

    openArtifact(artifact: Artifact) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.data = artifact;
        dialogConfig.width = "50vw";
        dialogConfig.height = "100vh";

        if (this.isEditMode) {
            this.dialog.open(EditArtifactFormComponent, dialogConfig);
        } else {
            this.dialog.open(ArtifactViewComponent, dialogConfig);
        }
    }

    deleteWarning(artifact: Artifact) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.data = artifact;
        
        this.dialog.open(DeleteWarningComponent, dialogConfig);
    }

    openCreate() {
        
        const dialogConfig = new MatDialogConfig();

        var data = {
            userId: this.userId,
            familyId: this.familyId,
            categories: this.categories,
        }

        dialogConfig.autoFocus = true;
        dialogConfig.data = data;
        dialogConfig.width = "50vw";
        dialogConfig.height = "100vh";
        
        this.dialog.open(ArtifactFormComponent, dialogConfig);
        
    }

    createCategory(name: String) {
        for (var category of this.categories) {
            if (name == category.name) {
                this.snackBar.open('Category already exists!', 'OK', {duration: 3000}) ;
                return
            }
        }
        if (name) {
            this.artifactService.postCategory(name).then(res => this.ngOnInit());
        }
    }

    deleteCategory(id) {
        for (var artifact of this.artifacts) {
            if (id == artifact.category) {
                this.snackBar.open('Can\'t remove category: Artifacts that belong to this category exist!', 'OK', {duration: 3000}) ;
                return
            }
        }
        
        this.artifactService.deleteCategory(id).then(res => this.ngOnInit());

    }

    sortArtifacts() {
        if (this.sortOption == "added") {
            this.sortedArtifacts = this.filteredArtifacts.slice();
        }
        else if (this.sortOption == "alpha") {
            this.sortedArtifacts = this.filteredArtifacts.slice();
            this.sortedArtifacts.sort(this.compareName);
        }
        else if (this.sortOption == "obtained") {
            this.sortedArtifacts = this.filteredArtifacts.slice();
            this.sortedArtifacts = this.sortByDate(this.sortedArtifacts);
        }
    }

    compareName(a1: Artifact, a2: Artifact) {
        if (a1.name.toLowerCase() < a2.name.toLowerCase()) {
            return -1;
        }
        else if (a1.name.toLowerCase() > a2.name.toLowerCase()) {
            return 1;
        }
        else {
            return 0;
        }
    }

    sortByDate(unsortedArtifacts: Artifact[]) {
        var artifactsWithDates = [];
        for (var unsortedArtifact of unsortedArtifacts) {
            var year = parseInt(unsortedArtifact.year.valueOf());
            var month = this.parseMonth(unsortedArtifact.month);
            var day = parseInt(unsortedArtifact.day.valueOf());
            var artifactWithDate = [unsortedArtifact, year, month, day];
            artifactsWithDates.push(artifactWithDate);
        }
        artifactsWithDates.sort(this.sortArtifactsWithDates);
        var sortedArray = [];
        for (var sorted of artifactsWithDates) {
            sortedArray.push(sorted[0]);
        }
        return sortedArray;
    }

    parseMonth(month: String) {
        if (month == "1" || month.toLowerCase().startsWith("jan")) {
            return 1;
        } else if (month == "2" || month.toLowerCase().startsWith("feb")) {
            return 2;
        } else if (month == "3" || month.toLowerCase().startsWith("mar")) {
            return 3;
        } else if (month == "4" || month.toLowerCase().startsWith("apr")) {
            return 4;
        } else if (month == "5" || month.toLowerCase().startsWith("may")) {
            return 5;
        } else if (month == "6" || month.toLowerCase().startsWith("jun")) {
            return 6;
        } else if (month == "7" || month.toLowerCase().startsWith("jul")) {
            return 7;
        } else if (month == "8" || month.toLowerCase().startsWith("aug")) {
            return 8;
        } else if (month == "9" || month.toLowerCase().startsWith("sep")) {
            return 9;
        } else if (month == "10" || month.toLowerCase().startsWith("oct")) {
            return 10;
        } else if (month == "11" || month.toLowerCase().startsWith("nov")) {
            return 11;
        } else if (month == "12" || month.toLowerCase().startsWith("dec")) {
            return 12;
        } else {
            //no month first (default start of year)
            return 0;
        }
    }

    sortArtifactsWithDates(ad1, ad2) {
        //first compare year
        //no year defaults to end of list
        if (isNaN(ad1[1]) && isNaN(ad2[1])) {
            return 0;
        } else if (isNaN(ad1[1])) {
            return 1;
        } else if (isNaN(ad2[1])) {
            return -1;
        } else if (ad1[1] > ad2[1]) {
            return 1;
        } else if (ad1[1] < ad2[2]) {
            return -1;
        } else {
            //compare month (never NaN since it's already been parsed)
            if (ad1[1] > ad2[1]) {
                return 1;
            } else if (ad1[1] < ad2[2]) {
                return -1;
            } else {
                //compare day
                //no day defaults to start of month
                if (isNaN(ad1[3]) && isNaN(ad2[3])) {
                    return 0;
                } else if (isNaN(ad1[3])) {
                    return -1;
                } else if (isNaN(ad2[3])) {
                    return 1;
                } else if (ad1[3] > ad2[3]) {
                    return 1;
                } else if (ad1[3] < ad2[3]) {
                    return -1;
                }
            }
        }

        return 0;
    }
}
