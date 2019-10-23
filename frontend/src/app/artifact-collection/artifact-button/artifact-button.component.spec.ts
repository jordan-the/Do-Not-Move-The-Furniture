import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactButtonComponent } from './artifact-button.component';

describe('ArtifactButtonComponent', () => {
  let component: ArtifactButtonComponent;
  let fixture: ComponentFixture<ArtifactButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
