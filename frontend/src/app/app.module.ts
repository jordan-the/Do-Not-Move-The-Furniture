import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { FamilyService} from './family.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PersonalDetailComponent } from './component/personal-detail/personal-detail.component';
import { FamilyMemberDetailComponent } from './component/family-member-detail/family-member-detail.component';
import { FamilMemberListComponent } from './component/famil-member-list/famil-member-list.component';


const routes: Routes = [
  { path: 'familyMemberList', component: FamilMemberListComponent},
  { path: 'familyMembersDetail', component: FamilyMemberDetailComponent},
  { path: 'personalDetail/:id', component: PersonalDetailComponent},
  // { path: '', redirectTo: "familyMemberList", pathMatch: 'full'}
  { path: '', redirectTo: "familyMembersDetail", pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    FamilyMemberDetailComponent,
    FamilMemberListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule
  ],
  providers: [UserService, FamilyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
