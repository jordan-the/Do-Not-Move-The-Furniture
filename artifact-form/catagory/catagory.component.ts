import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {
  catagories: String[] = [];
  constructor() { }

  catagoriesAdd(catagory: String){
    this.catagories.push(catagory);
  }

  ngOnInit() {
  }

  onKey(event: any) {
    console.log(event.target.value);
  }

  addCatagory(catagory: string){
    this.catagories.push(catagory);
    console.log(catagory);
  }

  removeCatagory(catagory: string){
    for(var i=0; i < this.catagories.length; i++){
      if(catagory == this.catagories[i]){
        console.log(this.catagories.length);
        this.catagories.splice(i,1);
        console.log(this.catagories.length);
        break;
      }
    }
  }

}
