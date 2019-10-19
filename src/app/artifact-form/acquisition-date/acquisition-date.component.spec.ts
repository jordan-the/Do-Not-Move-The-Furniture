import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquisitionDateComponent } from './acquisition-date.component';

describe('AcquisitionDateComponent', () => {
  let component: AcquisitionDateComponent;
  let fixture: ComponentFixture<AcquisitionDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquisitionDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquisitionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
