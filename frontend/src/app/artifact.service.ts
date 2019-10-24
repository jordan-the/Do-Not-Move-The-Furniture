import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Artifact, Image, Category, Msg, ArtifactCategoryRelationship } from './data-structures';
import { reject } from 'q';


@Injectable({
    providedIn: 'root'
})
export class ArtifactService {

    uri = 'http://localhost:3000'

    constructor(
        private http: HttpClient,
    ) { }

    getArtifacts() {
        return this.http.get<Artifact[]>(`${this.uri}/api/artifact`);
    }

    getSingleArtifact(id) {
        console.log(`http:///api/artifact/${id}`);
        return this.http.get<Artifact>(`http://localhost:9000/api/artifact/:${id}`);
    }

    deleteArtifact(id) {
        return new Promise ((resolve, reject) => {this.http.get<Msg>(`${this.uri}/api/artifact/delete/${id}`).subscribe(data => resolve(data))});
    }

    getImages(artifactId) {
        return this.http.get<Image[]>(`${this.uri}/api/image/${artifactId}`);
    }

    getCategories() {
        return this.http.get<Category[]>(`${this.uri}/api/category`);
    }

    getCategoryRelationships() {
        return this.http.get<ArtifactCategoryRelationship[]>(`${this.uri}/api/relationship`);
    }

    postCategory(newName: String) {
        var catForm = {name: newName}
        console.log("Added")
        return new Promise ((resolve, reject) => {this.http.post(`${this.uri}/api/category`, catForm).subscribe(data => resolve(data))});
    }

    deleteCategory(id) {
        console.log(id)
        return new Promise ((resolve, reject) => {this.http.get<Msg>(`${this.uri}/api/category/delete/${id}`).subscribe(data => resolve(data))});
    }

    postArtifact(artifactForm: JSON) {
        return new Promise((resolve, reject)=>{
            this.http.post(`${this.uri}/api/artifact`, artifactForm)
            .subscribe(res=> {
                resolve(res["artifactId"]);
            }, (err) => {
                reject(err);
            });
        });
    }

    editArtifact(artifactForm: JSON, id){
        return new Promise((resolve, reject)=>{
            this.http.post(`${this.uri}/api/edit/artifact/${id}`, artifactForm)
            .subscribe(res=> {
                resolve(res["artifactId"]);
            }, (err) => {
                reject(err);
            });
        });
    }

    postArtifactImage(image: File, id){
        const imageForm: FormData = new FormData();
        imageForm.append("image", image);
        return new Promise((resolve, reject) => {
            this.http.post(`${this.uri}/api/image/${id}`, imageForm)
        .subscribe(
            data => resolve(data)
        );
        }); 
        
    }

    postCate(id, category){
        var artifactCategory = {
            "artifactId": id,
            "categoryId": category
        }
        return this.http.post(`${this.uri}/api/relationship`, artifactCategory).subscribe();
    }

}
