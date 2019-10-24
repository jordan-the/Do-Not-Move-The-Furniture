import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../data-structures';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {
  categories: Category[] = [];
  filters: Category[] = [];

  @Input() catagoryOption : Category[];
  @Output() categoryEvent: EventEmitter<Category[]> = new EventEmitter();
  
  constructor() { }

  ngOnInit(){
    this.categories = this.catagoryOption;
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
