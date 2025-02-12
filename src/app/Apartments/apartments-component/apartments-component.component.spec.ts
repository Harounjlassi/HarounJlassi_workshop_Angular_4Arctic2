import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsComponentComponent } from './apartments-component.component';

describe('ApartmentsComponentComponent', () => {
  let component: ApartmentsComponentComponent;
  let fixture: ComponentFixture<ApartmentsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentsComponentComponent]
    });
    fixture = TestBed.createComponent(ApartmentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
