import { Component, OnInit, Inject } from '@angular/core';
import { Artifact } from 'src/app/data-structures';
import { ArtifactService } from 'src/app/artifact.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-delete-warning',
	templateUrl: './delete-warning.component.html',
	styleUrls: ['./delete-warning.component.css']
})
export class DeleteWarningComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<DeleteWarningComponent>,
		private artifactService: ArtifactService,
		@Inject(MAT_DIALOG_DATA) public artifact: Artifact,
	) { }

	ngOnInit() {
	}

	deleteArtifact() {
		this.artifactService.deleteArtifact(this.artifact._id).then(data => location.reload());
	}

	cancel() {
		this.dialogRef.close();
	}
}
