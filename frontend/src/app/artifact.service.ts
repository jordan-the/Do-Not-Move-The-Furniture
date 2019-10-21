import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Artifact, Image, Category, Msg } from './data-structures';

@Injectable({
    providedIn: 'root'
})
export class ArtifactService {

    uri = 'http://localhost:3000'

    constructor(
        private http: HttpClient
    ) { }

    getArtifacts() {
        return this.http.get<Artifact[]>(`${this.uri}/api/artifact`);
    }

    getSingleArtifact(id) {
        return this.http.get<Artifact>(`${this.uri}/api/artifact/${id}`);
    }

    deleteArtifact(id) {
        console.log(`${this.uri}/api/artifact/delete/${id}`)
        return this.http.get<Msg>(`${this.uri}/api/artifact/delete/${id}`);
        
    }

    getImages(artifactId) {
        return this.http.get<Image[]>(`${this.uri}/api/image/${artifactId}`)
    }

    getCategories() {
        return this.http.get<Category[]>(`${this.uri}/api/category`)
    }

    submit(artifactForm: JSON) {
        console.log(artifactForm);
        return this.http.post(`${this.uri}/api/artifact`, artifactForm);
    }
}