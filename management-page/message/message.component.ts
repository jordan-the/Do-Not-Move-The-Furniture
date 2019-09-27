import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    
  public tabIndex:any = "1";
  public tabOne:any = "selected";
  public tabTwo:any = "";

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
    } else if(selected == "2") {
      this.tabOne = "";
      this.tabTwo = "selected";
    } else {
      this.tabOne = "";
      this.tabTwo = "";
    }
  }

}
