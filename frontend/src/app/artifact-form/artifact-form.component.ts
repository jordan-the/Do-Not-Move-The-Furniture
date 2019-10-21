import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArtifactService } from '../artifact.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-artifact-form',
  templateUrl: './artifact-form.component.html',
  styleUrls: ['./artifact-form.component.css']
})
export class ArtifactFormComponent implements OnInit {
  artifactForm: FormGroup;
  userID= this.data[0];
  familyID= this.data[1];

  constructor(private fb: FormBuilder, private artifactService: ArtifactService, 
    public dialogRef: MatDialogRef<ArtifactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String[]) { 
  }

  ngOnInit() {
    this.artifactForm = this.fb.group({
      familyID: this.familyID,
      //  userID: this.userID,
      name: [''],
      description: [''],
      year: [''],
      month: [''],
      day: [''],
      currentLocation: [''],
      originLocation: ['']
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
