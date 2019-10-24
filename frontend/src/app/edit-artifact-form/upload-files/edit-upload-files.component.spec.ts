import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUploadFilesComponent } from './edit-upload-files.component';

describe('UploadFilesComponent', () => {
  let component: EditUploadFilesComponent;
  let fixture: ComponentFixture<EditUploadFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUploadFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUploadFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
