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
	currentImage;

  	constructor(
		public dialogRef: MatDialogRef<ArtifactViewComponent>,
        private artifactService: ArtifactService,
		@Inject(MAT_DIALOG_DATA) public data: Artifact,
	) { }

  	ngOnInit() {
		this.artifact = this.data;
		this.artifactService.getImages(this.artifact._id).subscribe(images => this.images = images);
		this.currentImage = 0;
	}

	nextImage() {
		this.currentImage = (this.currentImage + 1) % this.images.length;
	}

	prevImage() {
		if (this.currentImage == 0) {
			this.currentImage = this.images.length - 1;
		} else {
			this.currentImage--;
		}
	}
	  
	closeThis() {
		this.dialogRef.close();
	}

	
}