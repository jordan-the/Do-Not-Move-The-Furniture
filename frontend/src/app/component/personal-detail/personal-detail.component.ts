import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../../user.service';
import { User} from '../../user.model';

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
      password: '',
      email: '',
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
      })
    })
  }

  updateUser(name, password, email) {
    this.userService.updateUser(this.id, name, password, email).subscribe(() => {
      this.snackBar.open('User updated successfully', 'OK', {duration: 3000}) ;
    });
  }

  
}
