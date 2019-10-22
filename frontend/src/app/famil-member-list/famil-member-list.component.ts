import { Component, OnInit } from '@angular/core';

import { Family } from '../family.model';
import { FamilyService} from '../family.service';


@Component({
  selector: 'app-famil-member-list',
  templateUrl: './famil-member-list.component.html',
  styleUrls: ['./famil-member-list.component.css']
})
export class FamilMemberListComponent implements OnInit {

  family: Family[];

  constructor(private familyService: FamilyService) { }

  ngOnInit() {
    this.fetchFamily();
  }

  fetchFamily() {
    this.familyService
      .getFamily()
      .subscribe((data: Family[]) => {
        this.family = data;
        console.log(this.family) ;
      })
  }
}
