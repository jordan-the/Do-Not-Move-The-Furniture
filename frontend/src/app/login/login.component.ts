import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  email = "";
  password = "";

  constructor(
    private userService: UserService,
    ) { }

  ngOnInit() {
    this.userService.getUserById("5da1cd63d2839401a010632b").subscribe(user => this.user = user)
  }

  login() {
    if (this.email == this.user.email && this.password == this.user.password) {
      window.location.href = '/menu';
    }
    else {
      console.log(this.password)
      console.log(this.user)
      
    }
  }

}
