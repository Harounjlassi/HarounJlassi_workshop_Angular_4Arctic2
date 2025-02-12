import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApartmentComponentComponent } from './add-apartment-component.component';

describe('AddApartmentComponentComponent', () => {
  let component: AddApartmentComponentComponent;
  let fixture: ComponentFixture<AddApartmentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddApartmentComponentComponent]
    });
    fixture = TestBed.createComponent(AddApartmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
