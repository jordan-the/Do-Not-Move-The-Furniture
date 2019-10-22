import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acquisition-date',
  templateUrl: './acquisition-date.component.html',
  styleUrls: ['./acquisition-date.component.css']
})
export class AcquisitionDateComponent implements OnInit {

  @Input() artifactForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
