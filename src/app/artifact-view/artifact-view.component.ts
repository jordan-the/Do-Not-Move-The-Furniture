import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { Artifact, Image } from '../data-structures';
import { ArtifactService } from '../artifact.service';

@Component({
  	selector: 'app-artifact-view',
  	templateUrl: './artifact-view.component.html',
  	styleUrls: ['./artifact-view.component.css']
})
export class ArtifactViewComponent implements OnInit {

	artifact;
	images: Image[];
	noOfImages;

  	constructor(
		public dialogRef: MatDialogRef<ArtifactViewComponent>,
        private artifactService: ArtifactService,
		@Inject(MAT_DIALOG_DATA) public data: Artifact,
	) { }

  	ngOnInit() {
		this.artifact = this.data;
		this.artifactService.getImages(this.artifact._id).subscribe(images => this.images = images);
		// this.images = [
		// 	{
		// 		hostId: "TEST",
		// 		url: "https://i.imgur.com/Pp3Ra0N.png",
		// 		artifactId: "TEST",
		// 	},
		// 	{
		// 		hostId: "TEST",
		// 		url: "https://i.imgur.com/D5TdiNt.jpg",
		// 		artifactId: "TEST",
		// 	},
		// 	{
		// 		hostId: "TEST",
		// 		url: "https://i.imgur.com/OsUGTJ2.png",
		// 		artifactId: "TEST",
		// 	},
		// ]
	}
	  
	closeThis() {
		this.dialogRef.close()
	}
}