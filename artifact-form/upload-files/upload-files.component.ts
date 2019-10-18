import { Component, OnInit } from '@angular/core';
import { FileHandle } from './upload-files.directive';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  files: FileHandle[] = [];
  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }
  constructor() { }

  deleteImage(file: File): void{
    for(var i= 0; i < this.files.length; i++){
      if(JSON.stringify(this.files[i]) == JSON.stringify(file)){
        this.files.splice(i,1);
      }
    }
  }

  ngOnInit() {
  }

}
