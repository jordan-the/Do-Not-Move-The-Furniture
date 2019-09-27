import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { FamilyMemberComponent } from './family-member/family-member.component';
import { MessageComponent } from './message/message.component';
import { FamilyComponent } from './family/family.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    PersonalDetailComponent,
    FamilyMemberComponent,
    MessageComponent,
    FamilyComponent,
  ]
})
export class ManagementPageModule { }
