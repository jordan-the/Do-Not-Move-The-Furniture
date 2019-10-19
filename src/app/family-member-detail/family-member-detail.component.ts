import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FamilyService} from '../family.service';

import { Family } from '../family.model';

@Component({
  selector: 'app-family-member-detail',
  templateUrl: './family-member-detail.component.html',
  styleUrls: ['./family-member-detail.component.css']
})
export class FamilyMemberDetailComponent implements OnInit {

  family: Family[];
  createForm: FormGroup;


  constructor(private familyService: FamilyService, private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      name: [null, Validators.required],
      bday: null
    })
  }

  addFamily(name, bday) {
    console.log(name, bday);
    this.familyService.addFamily(name, bday).subscribe(() => {
      this.fetchFamily();
    })
  }
  
  delateFamily(id) {
    this.familyService.deleteFamily(id).subscribe(() =>{
      this.fetchFamily();
    })
  }  

  ngOnInit() {
    this.fetchFamily();
  }

  returnId(id) {
    console.log(id);
  }
  
  fetchFamily() {
    this.familyService
      .getFamily()
      .subscribe((data: Family[]) => {
        this.family = data;
        console.log(this.family) ;
      })
  }

}
