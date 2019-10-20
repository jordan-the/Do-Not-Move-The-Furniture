import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMemberDetailComponent } from './family-member-detail.component';

describe('FamilyMemberDetailComponent', () => {
  let component: FamilyMemberDetailComponent;
  let fixture: ComponentFixture<FamilyMemberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyMemberDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
