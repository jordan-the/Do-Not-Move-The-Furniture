import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatagoryComponent } from './edit-catagory.component';

describe('CatagoryComponent', () => {
  let component: EditCatagoryComponent;
  let fixture: ComponentFixture<EditCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
