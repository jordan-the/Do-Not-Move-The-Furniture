import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../user.service';
import { User} from '../data-structures';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {
  id: String;
  user: any = {};
  createForm: FormGroup;


  constructor(private userService: UserService, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.updateForm();
  }

  updateForm() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: '',
      password: '',
      confirmPass: '',
    });
  }
  
  ngOnInit() { 
    this.route.params.subscribe(params =>{
      this.id = params.id;
      this.userService.getUserById(this.id).subscribe(res => {
        this.user = res;
        console.log(this.user);
        this.createForm.get("name").setValue(this.user.name);
        this.createForm.get("email").setValue(this.user.email);
        this.createForm.get("password").setValue("");
        this.createForm.get("confirmPass").setValue("");
      })
    })
  }

  updateUser(name, password, email) {
    this.userService.updateUser(this.id, name, password, email).subscribe(() => {
      console.log(this.id, name, password, email);
      this.snackBar.open('User updated successfully', 'OK', {duration: 3000}) ;
      this.ngOnInit();
    });
  }

  updateUserPass(newPass, confirmPass) {
    if(newPass == confirmPass) {
      this.userService.updateUser(this.id, this.user.name, newPass, this.user.email).subscribe(() => {
        console.log(this.id, name, newPass, this.user.email);
        this.snackBar.open('User updated successfully', 'OK', {duration: 3000}) ;
        this.ngOnInit();
      });
    }

    else{
      this.snackBar.open('User updated Unsuccessfully, please check', 'OK', {duration: 3000}) ;
      this.ngOnInit();
    }
  }

  
}
