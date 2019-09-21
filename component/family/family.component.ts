import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  public familyList:any[] = [{
      name: "member_1",
      email: "XX1@XX.edu.au"
    }, {
      name: "member_2",
      email: "XX2@XX.edu.au"
    },{
      name: "member_3",
      email: "XX3@XX.edu.au"
    }];
  constructor() { }

  ngOnInit() {
  }

}
