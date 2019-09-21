import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'


import { PersonalDetailComponent } from './component/personal-detail/personal-detail.component';
import { FamilyMemberComponent } from './component/family-member/family-member.component';
import { MessageComponent } from './component/message/message.component';
import { FamilyComponent } from './component/family/family.component';

@NgModule({
  declarations: [
    AppComponent,
    
    PersonalDetailComponent,
    FamilyMemberComponent,
    MessageComponent,
    FamilyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


