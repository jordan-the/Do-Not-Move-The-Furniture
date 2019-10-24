import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {

  @Input() artifactForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
