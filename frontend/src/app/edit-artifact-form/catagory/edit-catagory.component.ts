import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../data-structures';

@Component({
  selector: 'app-edit-catagory',
  templateUrl: './edit-catagory.component.html',
  styleUrls: ['./edit-catagory.component.css']
})
export class EditCatagoryComponent implements OnInit {
  catagories: String[] = [];
  filters: Category[] = [];
  
  categories = [
    {
      _id: "test",
      name: "test"
    },
    {
      _id: "test1",
      name: "test1"
    },
    {
      _id: "test2",
      name: "test2"
    },
    {
      _id: "test3",
      name: "test3"
    }
  ]

  @Input() catagoryOption : String[];
  @Output() categoryEvent: EventEmitter<Category[]> = new EventEmitter();
  
  constructor() { }

  ngOnInit(){

  }

  includeFilter(filter) {
    var i = this.filters.indexOf(filter);
    if (i > -1) {
        this.filters.splice(i, 1);
    } else {
        this.filters.push(filter);
    }
    this.categoryEvent.emit(this.filters);
}

}
