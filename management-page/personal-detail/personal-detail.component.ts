import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  public userInfo:any = {
    name:"Dan Shan",
    password:"12345",
    email:"dshan@student.unimelb.edu.au"
  };

  constructor() { }

  ngOnInit() {
  }
}
