import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtifactCollectionComponent } from './artifact-collection/artifact-collection.component';
import { ArtifactViewComponent } from './artifact-view/artifact-view.component';

const routes: Routes = [
	{ path: '', component: ArtifactCollectionComponent},
	{ path: 'view/:artifactId', component: ArtifactViewComponent},
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
