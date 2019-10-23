import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArtifactService } from '../artifact.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { FileHandle } from './upload-files/upload-files.directive';

import { HttpClient } from '@angular/common/http';
import { Category } from '../data-structures';

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
  catagories = [];
  chosenCatagories: Category[] = [];

  cata= [
    {
        "_id": "5d7b79ce417a8abd984181b1",
        "name": "wooden",
        "__v": 0
    },
    {
        "_id": "5d7d9c40c6ef0b2a09a6d1cb",
        "name": "paperwork",
        "__v": 0
    }
  ];

  getCatagoryNames(object){
    for(var i = 0; i < this.cata.length; i ++){
      this.catagories.push(this.cata[i]["name"]);
    }
  }

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
      category: [''],
      currentLocation: [''],
      originLocation: ['']
    })

    this.getCatagoryNames(this.cata);

    
    /*console.log("getting catagories");
        for(var i=0 ; i < this.catagories.length; i++){
      console.log(this.catagories[i]);
    }*/
  }

  getImages(files: FileHandle[]): void{
    this.images = files;
  }

  getCategory(catag: Category[]): void{
    this.chosenCatagories = catag;
    console.log(this.chosenCatagories);
  }

  onSubmit(){
    this.artifactService.postArtifact(this.artifactForm.value)
    .then(res => this.submitImagesAndCategories(res, this.images, this.chosenCatagories));
  }

  submitImagesAndCategories(response, images: FileHandle[], catagos: Category[]){
    this.submitImages(response, images);
    this.submitCategories(response, catagos);

		this.dialogRef.close();
  }

  submitCategories(response, cat: Category[]){
    for(var i= 0; i < cat.length; i++){
      console.log("uploading category ", i);
      this.artifactService.postCate(response, cat[i]["_id"]);
    }
  }

  submitImages(response, images: FileHandle[]) {
    for(var i= 0; i < images.length; i++){
      console.log("uploading image ", i);
      this.artifactService.postArtifactImage(this.images[i].file, response);
    }
  }

}
