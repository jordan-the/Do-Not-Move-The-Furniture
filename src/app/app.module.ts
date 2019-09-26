import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { DescriptionComponent } from './description/description.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { AcquisitionDateComponent } from './acquisition-date/acquisition-date.component';
import { PreviousOwnersComponent } from './previous-owners/previous-owners.component';
import { UploadFilesDirective } from './upload-files/upload-files.directive';
import { ImageDirectiveDirective } from './upload-files/image-directive.directive';
import { TitleComponent } from './title/title.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent,
    DescriptionComponent,
    CatagoryComponent,
    AcquisitionDateComponent,
    PreviousOwnersComponent,
    UploadFilesDirective,
    ImageDirectiveDirective,
    TitleComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
