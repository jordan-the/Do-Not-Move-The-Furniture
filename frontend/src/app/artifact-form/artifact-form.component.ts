import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArtifactService } from '../artifact.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-artifact-form',
  templateUrl: './artifact-form.component.html',
  styleUrls: ['./artifact-form.component.css']
})
export class ArtifactFormComponent implements OnInit {
  artifactForm: FormGroup;

  constructor(private fb: FormBuilder, private artifactService: ArtifactService, 
		public dialogRef: MatDialogRef<ArtifactFormComponent>,) { 
  }

  ngOnInit() {
    this.artifactForm = this.fb.group({
      name: [''],
      description: [''],
      year: [''],
      month: [''],
      day: ['']
    })
  }

  onSubmit(): void{

    this.artifactService.submit(this.artifactForm.value).subscribe(
      data => console.log("Success!", data),
      error => console.log(error)
    )
		this.dialogRef.close()
  }

}
