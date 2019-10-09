import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtifactCollectionComponent } from './artifact-collection/artifact-collection.component';
import { ArtifactViewComponent } from './artifact-view/artifact-view.component';
import { TestComponent } from './test/test.component';
import { CreateComponent } from './create/create.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { DescriptionComponent } from './description/description.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { AcquisitionDateComponent } from './acquisition-date/acquisition-date.component';
import { PreviousOwnersComponent } from './previous-owners/previous-owners.component';
import { UploadFilesDirective } from './upload-files/upload-files.directive';
import { ImageDirectiveDirective } from './upload-files/image-directive.directive';
import { TitleComponent } from './title/title.component';

@NgModule({
    declarations: [
        AppComponent,
        ArtifactCollectionComponent,
        ArtifactViewComponent,
        TestComponent,
        CreateComponent,
        UploadFilesComponent,
        DescriptionComponent,
        CatagoryComponent,
        AcquisitionDateComponent,
        PreviousOwnersComponent,
        UploadFilesDirective,
        ImageDirectiveDirective,
        TitleComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        ArtifactViewComponent,
        CreateComponent,
    ]
})
export class AppModule { }
