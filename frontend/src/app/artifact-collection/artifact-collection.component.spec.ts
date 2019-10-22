import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactCollectionComponent } from './artifact-collection.component';

describe('ArtifactCollectionComponent', () => {
	let component: ArtifactCollectionComponent;
	let fixture: ComponentFixture<ArtifactCollectionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ArtifactCollectionComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ArtifactCollectionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
