import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtifactCollectionComponent } from './artifact-collection/artifact-collection.component';
import { ArtifactViewComponent } from './artifact-view/artifact-view.component';
import { FamilMemberListComponent } from './famil-member-list/famil-member-list.component';
import { FamilyMemberDetailComponent } from './family-member-detail/family-member-detail.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
	{ path: '', component: FrontPageComponent },
	{ path: 'menu', component: MenuComponent},
	{ path: 'list', component: ArtifactCollectionComponent},
	{ path: 'view/:artifactId', component: ArtifactViewComponent},
	{ path: 'familyMemberList', component: FamilMemberListComponent},
	{ path: 'familyMembersDetail', component: FamilyMemberDetailComponent},
	{ path: 'personalDetail/:id', component: PersonalDetailComponent},
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
