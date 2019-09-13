import { Component, OnInit } from '@angular/core';
import { DUMMYARTIFACTS } from '../dummy-info';

@Component({
  selector: 'app-artifact-collection',
  templateUrl: './artifact-collection.component.html',
  styleUrls: ['./artifact-collection.component.css']
})
export class ArtifactCollectionComponent implements OnInit {

  artifacts = DUMMYARTIFACTS;

  constructor() { }

  ngOnInit() {
  }

}