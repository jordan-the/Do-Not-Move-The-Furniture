import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcquisitionDateComponent } from './edit-acquisition-date.component';

describe('AcquisitionDateComponent', () => {
  let component: EditAcquisitionDateComponent;
  let fixture: ComponentFixture<EditAcquisitionDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAcquisitionDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcquisitionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
