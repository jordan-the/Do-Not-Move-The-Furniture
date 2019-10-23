import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtifactFormComponent } from './artifact-form.component';
import { UploadFilesComponent } from './upload-files/upload-files.component'
import { AcquisitionDateComponent } from './acquisition-date/acquisition-date.component'
import { CatagoryComponent } from './catagory/catagory.component'
import { DescriptionComponent } from './description/description.component'
import { TitleComponent } from './title/title.component'
import { UploadFilesDirective } from './upload-files/upload-files.directive'
import { ImageDirective } from './upload-files/image.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationComponent } from './location/location.component';
import { MaterialModule } from '../../material-module';

@NgModule({
  declarations: [
    ArtifactFormComponent,
    UploadFilesComponent,
    AcquisitionDateComponent,
    CatagoryComponent,
    DescriptionComponent,
    TitleComponent,
    UploadFilesDirective,
    ImageDirective,
    LocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ArtifactFormComponent
  ],
  entryComponents: [
    ArtifactFormComponent
  ]
})
export class ArtifactFormModule { }
