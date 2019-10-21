import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArtifactService } from '../artifact.service';
import { Artifact, Category } from '../data-structures';
import { ArtifactViewComponent } from '../artifact-view/artifact-view.component';
import { ArtifactFormComponent } from '../artifact-form/artifact-form.component';

@Component({
    selector: 'app-artifact-collection',
    templateUrl: './artifact-collection.component.html',
    styleUrls: ['./artifact-collection.component.css'],
    encapsulation: ViewEncapsulation.None
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

    searchTerms = [];

    //used by search bar
    searchText = "";

    constructor(
        public dialog: MatDialog,
        private artifactService: ArtifactService
    ) { }


    ngOnInit() {
        this.artifactService.getArtifacts().subscribe(artifacts => this.artifacts = artifacts);
        this.artifactService.getArtifacts().subscribe(artifacts => this.filteredArtifacts = artifacts);
        this.artifactService.getCategories().subscribe(categories => this.categories = categories);
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
            if (x.category == filter._id) {
                return false;
            }
        }
        console.log(this.searchTerms);

        for (var term of this.searchTerms) {
            if (!(x.name.includes(term) || x.description.includes(term))) {
                return false;
            }
        }
        return true;
    }
    
    search(text: String) {
        this.searchTerms = text.split(",");
        this.updateArtifacts();
    }

    openArtifact(x: Artifact) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.data = x;
        dialogConfig.width = "50vw";

        this.dialog.open(ArtifactViewComponent, dialogConfig);
    }

    openEdit (x: Artifact) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.data = x;
        dialogConfig.width = "50vw";

        //todo: add edit
        this.dialog.open(null, dialogConfig);
    }

    openCreate() {
        
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.data = [this.userId, this.familyId]
        dialogConfig.width = "50vw";
        dialogConfig.height = "100vh";

        this.dialog.open(ArtifactFormComponent, dialogConfig);
    }


}
