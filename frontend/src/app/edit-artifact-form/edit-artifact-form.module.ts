import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArtifactFormComponent } from './edit-artifact-form.component';
import { EditUploadFilesComponent } from './upload-files/edit-upload-files.component'
import { EditAcquisitionDateComponent } from './acquisition-date/edit-acquisition-date.component'
import { EditCatagoryComponent } from './catagory/edit-catagory.component'
import { EditDescriptionComponent } from './description/edit-description.component'
import { EditTitleComponent } from './title/edit-title.component'
import { EditUploadFilesDirective } from './upload-files/edit-upload-files.directive'
import { EditImageDirective } from './upload-files/edit-image.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditLocationComponent } from './location/edit-location.component';
import { MaterialModule } from '../../material-module';

@NgModule({
  declarations: [
    EditArtifactFormComponent,
    EditUploadFilesComponent,
    EditAcquisitionDateComponent,
    EditCatagoryComponent,
    EditDescriptionComponent,
    EditTitleComponent,
    EditUploadFilesDirective,
    EditImageDirective,
    EditLocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    EditArtifactFormComponent
  ],
  entryComponents: [
    EditArtifactFormComponent
  ]
})
export class EditArtifactFormModule { }
