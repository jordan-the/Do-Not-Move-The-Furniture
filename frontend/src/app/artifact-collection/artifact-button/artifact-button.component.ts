import { Component, OnInit, Input } from '@angular/core';
import { Artifact, Image } from 'src/app/data-structures';
import { ArtifactService } from 'src/app/artifact.service';

@Component({
	selector: 'app-artifact-button',
	templateUrl: './artifact-button.component.html',
	styleUrls: ['./artifact-button.component.css']
})
export class ArtifactButtonComponent implements OnInit {
	@Input() artifact: Artifact;

	image: Image;

	constructor(private artifactService: ArtifactService) { }

	ngOnInit() {
		this.artifactService.getImages(this.artifact._id).subscribe(images => this.image = images[0]);
	}

}
