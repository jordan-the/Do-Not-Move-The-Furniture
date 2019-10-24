import { Directive, HostListener, HostBinding, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle{
  file: File,
  url: SafeUrl
}

@Directive({
  selector: '[appUploadFiles]'
})
export class UploadFilesDirective {
  public uploadFiles: FileHandle[] = []

  @Output() files: EventEmitter<FileHandle[]> = new EventEmitter();

  @HostBinding('style.background') private background = '#fff';

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener('mouseover',['$event']) public onMouseOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }

  @HostListener('mouseout', ['$event']) public onMouseOut(evt){
    evt.preventDefault();
    evt.stopPropagation();
    console.log("mouseOff");
    this.background = '#fff';
  }

  @HostListener('dragover', ['$event']) public onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    console.log("dragover");
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#fff';
    console.log("dragLeave");
  }

  @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();

    for(let i = 0; i < evt.dataTransfer.files.length; i++){ 
      const file = evt.dataTransfer.files[i];
      if(file['type'].split('/')[0] === 'image'){
        console.log(file.name);
        const url = this.sanitizer.bypassSecurityTrustUrl
        (window.URL.createObjectURL(file));
        this.uploadFiles.push({ file, url});
      }else{
        alert("Error: Inavlid File Type\nFile: " + file.name);
      }
    }

    for(let i = 0; i < this.uploadFiles.length; i++){
      console.log(this.uploadFiles[i]);
    }
    if (this.uploadFiles.length > 0){
      this.files.emit(this.uploadFiles);
    }
  }

}


