import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArtifactService } from '../artifact.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { FileHandle } from './upload-files/upload-files.directive';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artifact-form',
  templateUrl: './artifact-form.component.html',
  styleUrls: ['./artifact-form.component.css']
})
export class ArtifactFormComponent implements OnInit {
  artifactForm: FormGroup;
  userID= this.data[0];
  familyID= this.data[1];
  artifactID = null;
  images: FileHandle[] = [];

  artiID: "testing";

  constructor(
    private fb: FormBuilder, 
    private artifactService: ArtifactService, 
    public dialogRef: MatDialogRef<ArtifactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String[],
    private http: HttpClient
    ) { }

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

  getImages(files: FileHandle[]): void{
    this.images = files;
    console.log(this.images[0].file);
  }

  onSubmit(){
    console.log(this.images);
    console.log(this.images[0]);
    console.log(this.images[0].file);
    this.artifactService.postArtifact(this.artifactForm.value)
    .then(res => this.artifactService.postArtifactImage(this.images[0].file,res).subscribe(
      data => console.log("Successful", data),
      err => console.log("Failure", err)
    ));
    /*
    console.log("posting null");
    this.artifactService.postArtifactImage(null, this.artiID).subscribe(
      data => console.log("Successful", data),
      err => console.log("Failure", err)
    );*/
  }


  submitArtifact() {

    /*
    this.artifactService.submit(this.artifactForm.value).subscribe(
      data => this.artifactID=data,
      error => console.log(error),
    );
      */

		this.dialogRef.close()
  }

}
