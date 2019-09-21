import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.css']
})
export class FamilyMemberComponent implements OnInit {

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
