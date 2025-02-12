import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsByResidenceComponentComponent } from './apartments-by-residence-component.component';

describe('ApartmentsByResidenceComponentComponent', () => {
  let component: ApartmentsByResidenceComponentComponent;
  let fixture: ComponentFixture<ApartmentsByResidenceComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentsByResidenceComponentComponent]
    });
    fixture = TestBed.createComponent(ApartmentsByResidenceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
