import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilMemberListComponent } from './famil-member-list.component';

describe('FamilMemberListComponent', () => {
  let component: FamilMemberListComponent;
  let fixture: ComponentFixture<FamilMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilMemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
