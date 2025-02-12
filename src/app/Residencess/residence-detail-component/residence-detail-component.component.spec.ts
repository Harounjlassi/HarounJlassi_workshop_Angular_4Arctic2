import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceDetailComponentComponent } from './residence-detail-component.component';

describe('ResidenceDetailComponentComponent', () => {
  let component: ResidenceDetailComponentComponent;
  let fixture: ComponentFixture<ResidenceDetailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidenceDetailComponentComponent]
    });
    fixture = TestBed.createComponent(ResidenceDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
