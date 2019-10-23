import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtifactCollectionComponent } from './artifact-collection/artifact-collection.component';
import { ArtifactViewComponent } from './artifact-view/artifact-view.component';
import { ArtifactService } from './artifact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtifactFormModule } from './artifact-form/artifact-form.module';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { FamilyMemberDetailComponent } from './family-member-detail/family-member-detail.component';
import { FamilMemberListComponent } from './famil-member-list/famil-member-list.component';
import { UserService } from './user.service';
import { FamilyService } from './family.service';
import { FrontPageComponent } from './front-page/front-page.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ArtifactButtonComponent } from './artifact-collection/artifact-button/artifact-button.component';
 
@NgModule({
    declarations: [
        AppComponent,
        ArtifactCollectionComponent,
        ArtifactViewComponent,
        PersonalDetailComponent,
        FamilyMemberDetailComponent,
        FamilMemberListComponent,
        FrontPageComponent,
        MenuComponent,
        LoginComponent,
        ArtifactButtonComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ArtifactFormModule,
        ReactiveFormsModule,
        
    ],
    providers: [ArtifactService,UserService,FamilyService],
    bootstrap: [AppComponent],
    entryComponents: [
        ArtifactViewComponent,
    ]
})
export class AppModule { }
