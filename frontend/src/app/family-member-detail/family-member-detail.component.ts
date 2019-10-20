import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FamilyService} from '../family.service';
import { Router } from '@angular/router';
import { Family } from '../data-structures';

@Component({
  selector: 'app-family-member-detail',
  templateUrl: './family-member-detail.component.html',
  styleUrls: ['./family-member-detail.component.css']
})
export class FamilyMemberDetailComponent implements OnInit {

  family: Family[];
  createForm: FormGroup;


  constructor(private familyService: FamilyService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      bday: ""
    })
  }

  addFamily(name, bday) {
    console.log(name, bday);
    this.familyService.addFamily(name, bday).subscribe(() => {
      this.router.navigate([`/familyMemberList`]);
    })
  }
  
  delateFamily(id) {
    console.log(id);
    this.familyService.deleteFamily(id).subscribe(() =>{
      this.router.navigate([`/familyMemberList`]);
    })
  }  

  updateFamily(id, name, bday) {
    console.log(id, name, bday);
    this.familyService.updateFamily(id, name, bday).subscribe(() => {
      this.router.navigate([`/familyMemberList`]);
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
