import { Component, OnInit, Output } from '@angular/core';
import { FileHandle } from './upload-files.directive';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  files: FileHandle[] = [];

  @Output() fileEvent: EventEmitter<FileHandle[]> = new EventEmitter();

  filesDropped(files: FileHandle[]): void {
    this.files = files;
    if(this.files.length > 0 ){
      this.fileEvent.emit(this.files);
    }
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
