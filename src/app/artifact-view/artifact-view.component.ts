import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DUMMYARTIFACTS } from '../dummy-info';


@Component({
  selector: 'app-artifact-view',
  templateUrl: './artifact-view.component.html',
  styleUrls: ['./artifact-view.component.css']
})
export class ArtifactViewComponent implements OnInit {

  artifact;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var artif;
      for (artif in DUMMYARTIFACTS) {
        if (artif.id == +params.get('artifactId')) {
          this.artifact = artif;
        }
      }
  });
}

}