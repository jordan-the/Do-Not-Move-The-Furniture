import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DUMMYARTIFACTS, DUMMYCATEGORIES } from '../dummy-info';
import { Artifact } from '../data-structures';
import { ArtifactViewComponent } from '../artifact-view/artifact-view.component';
import { CreateComponent } from '../create/create.component';

@Component({
    selector: 'app-artifact-collection',
    templateUrl: './artifact-collection.component.html',
    styleUrls: ['./artifact-collection.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ArtifactCollectionComponent implements OnInit {

    artifacts = DUMMYARTIFACTS;
    categories = DUMMYCATEGORIES;

    filters = [];
    filteredArtifacts = this.artifacts;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
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
        if (this.filters.length == 0) {
            this.filteredArtifacts = this.artifacts;
        } else {
            console.log("Hello")
            this.filteredArtifacts = this.artifacts.filter(x => (this.isFiltered(x)))
        }
    }

    isFiltered(x: Artifact) {
        console.log(x.categories)
        console.log(this.filters)
        for (var i of this.filters) {
            console.log(x.categories.indexOf(i))
            if (x.categories.indexOf(i) == -1) {
                return false;
            }
        }
        return true;
    }

    openArtifact(x: Artifact) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.data = x;
        dialogConfig.width = "50vw";

        this.dialog.open(ArtifactViewComponent, dialogConfig);
    }

    openCreate() {
        
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.width = "50vw";

        this.dialog.open(CreateComponent, dialogConfig);
    }

}
