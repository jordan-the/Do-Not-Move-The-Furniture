import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtifactFormComponent } from './edit-artifact-form.component';

describe('EditArtifactFormComponent', () => {
  let component: EditArtifactFormComponent;
  let fixture: ComponentFixture<EditArtifactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArtifactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArtifactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
