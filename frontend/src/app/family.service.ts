import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getFamily() {
    return this.http.get(`${this.uri}/family`);
  }

  getFamilyById(id) {
    return this.http.get(`${this.uri}/family/${id}`);
  }

  addFamily(name, bday) {
    const family = {
      name: name,
      bday: bday
    };
    return this.http.post(`${this.uri}/family`, family, {responseType: "text"});
  }

  updateFamily(id, name, bday) {
    const family = {
      name: name,
      bday: bday
    };
    return this.http.post(`${this.uri}/family/${id}`, family);
  }
  
  deleteFamily(id) {
    return this.http.get(`${this.uri}/family/delete/${id}`);
  }

}
