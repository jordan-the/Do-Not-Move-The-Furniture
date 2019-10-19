import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUserById(id) {
    return this.http.get(`${this.uri}/user/${id}`);
  }

  //Update
  updateUser(id, name, password, email) {
    const user = {
      name: name,
      password: password,
      email: email,
    };
    return this.http.post(`${this.uri}/user/update/${id}`, user);
  }
}
