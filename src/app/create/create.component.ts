import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ArtifactViewComponent } from '../artifact-view/artifact-view.component';

@Component({
  	selector: 'app-create',
	templateUrl: './create.component.html',
 	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  	constructor(
		public dialogRef: MatDialogRef<ArtifactViewComponent>,
  	) { }

  	ngOnInit() {
  	}

	closeThis() {
		this.dialogRef.close()
	}
}
