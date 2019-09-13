import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MaterialModule} from '../material-module';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtifactCollectionComponent } from './artifact-collection/artifact-collection.component';
import { ArtifactViewComponent } from './artifact-view/artifact-view.component';
import { CreateArtifactComponent } from './create-artifact/create-artifact.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule,
  RouterModule.forRoot([
      { path: '', component: FrontPageComponent },
      { path: 'home', component: HomePageComponent},
      { path: 'collection', component: ArtifactCollectionComponent},
      { path: 'view/:artifactId', component: ArtifactViewComponent},
      { path: 'create', component: CreateArtifactComponent},
    ])
  ],
  declarations: [ AppComponent, HelloComponent, FrontPageComponent, LoginComponent, HomePageComponent, ArtifactCollectionComponent, ArtifactViewComponent, CreateArtifactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
