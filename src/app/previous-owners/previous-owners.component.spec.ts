import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousOwnersComponent } from './previous-owners.component';

describe('PreviousOwnersComponent', () => {
  let component: PreviousOwnersComponent;
  let fixture: ComponentFixture<PreviousOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
