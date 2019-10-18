import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtifactFormComponent } from './artifact-form.component';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArtifactService {

  uri: string = "http://localhost:3000";

  constructor(private _http: HttpClient) { }

  submit(artifactForm: JSON){
    console.log(artifactForm);
    return this._http.post(`${this.uri}/api/artifact`, artifactForm);
  }
}
