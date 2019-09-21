import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  public tabIndex:any = "1";
  public tabOne:any = "selected";
  public tabTwo:any = "";
  public tabThree:any = "";

  public userInfo:any = {
    name:"Dan Shan",
    password:"12345",
    email:"dshan@student.unimelb.edu.au"
  };

  constructor() { }

  ngOnInit() {
  }

  public changeTab(selected) {
    this.tabIndex = selected;
    this.setClass(this.tabIndex);
  }

  public setClass(selected){
    if(selected == "1") {
      this.tabOne = "selected";
      this.tabTwo = "";
      this.tabThree = "";
    } else if(selected == "2") {
      this.tabOne = "";
      this.tabTwo = "selected";
      this.tabThree = "";
    } else {
      this.tabOne = "";
      this.tabTwo = "";
      this.tabThree = "selected";
    }
  }

}
