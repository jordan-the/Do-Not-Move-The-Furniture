import { Component, OnInit, Output, Input } from '@angular/core';
import { FileHandle } from './edit-upload-files.directive';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-upload-files',
  templateUrl: './edit-upload-files.component.html',
  styleUrls: ['./edit-upload-files.component.css']
})
export class EditUploadFilesComponent implements OnInit {
  files: FileHandle[] = [];
  
  //Changes
  @Input() nfiles: FileHandle[];
  //
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
    this.files = this.nfiles;
    console.log("nfiles");
    console.log(this.nfiles);
    console.log("files")
    console.log(this.files);

  }

}
