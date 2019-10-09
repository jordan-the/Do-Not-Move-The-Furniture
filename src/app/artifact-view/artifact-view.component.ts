import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DUMMYARTIFACTS, DUMMYCATEGORIES, DUMMYFAMILY } from '../dummy-info';
import { Artifact } from '../data-structures';

@Component({
  	selector: 'app-artifact-view',
  	templateUrl: './artifact-view.component.html',
  	styleUrls: ['./artifact-view.component.css']
})
export class ArtifactViewComponent implements OnInit {

  	artifact;
  	people = [];

  	constructor(
		public dialogRef: MatDialogRef<ArtifactViewComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Artifact
	) { }

  	ngOnInit() {
		this.artifact = this.data;
    	this.people = DUMMYFAMILY.filter(x => (this.artifact.associatedPeople.indexOf(x.id) > -1));
		console.log(this.artifact);
		console.log(this.people);
	}
	  
	closeThis() {
		this.dialogRef.close()
	}
}