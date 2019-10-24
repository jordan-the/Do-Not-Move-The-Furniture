import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArtifactService } from '../artifact.service';
import { Artifact, Category } from '../data-structures';
import { ArtifactViewComponent } from '../artifact-view/artifact-view.component';
import { ArtifactFormComponent } from '../artifact-form/artifact-form.component';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-artifact-collection',
    templateUrl: './artifact-collection.component.html',
    styleUrls: ['./artifact-collection.component.css'],
})
export class ArtifactCollectionComponent implements OnInit {

    artifacts: Artifact[];
    filteredArtifacts: Artifact[];
    searchedArtifacts: Artifact[];

    //temp
    familyId = "family";
    userId = "user";

    categories: Category[];
    filters: Category[] = [];
    newCategory: String;

    searchTerms = [];

    //used by search bar
    searchText = "";

    constructor(
        public dialog: MatDialog,
        private artifactService: ArtifactService,
        private snackBar: MatSnackBar,
    ) { }


    ngOnInit() {
        this.artifactService.getArtifacts().subscribe(artifacts => this.artifacts = artifacts);
        this.artifactService.getArtifacts().subscribe(artifacts => this.filteredArtifacts = artifacts);
        this.artifactService.getCategories().subscribe(categories => this.categories = categories);
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
        this.filteredArtifacts = this.artifacts.filter(x => (this.isFiltered(x)))
    }

    isFiltered(x: Artifact) {
        for (var filter of this.filters) {
            if (x.category != filter._id) {
                return false;
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

    openArtifact(x: Artifact) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.data = x;
        dialogConfig.width = "50vw";
        dialogConfig.height = "100vh";

        this.dialog.open(ArtifactViewComponent, dialogConfig);
    }

    openEdit (x: Artifact) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.data = x;
        dialogConfig.width = "50vw";
        dialogConfig.height = "100vh";

        //todo: add edit
        this.dialog.open(null, dialogConfig);
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
}
