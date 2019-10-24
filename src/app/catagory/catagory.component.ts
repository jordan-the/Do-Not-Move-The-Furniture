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

}
