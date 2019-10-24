import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-acquisition-date',
  templateUrl: './edit-acquisition-date.component.html',
  styleUrls: ['./edit-acquisition-date.component.css']
})
export class EditAcquisitionDateComponent implements OnInit {

  @Input() artifactForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
