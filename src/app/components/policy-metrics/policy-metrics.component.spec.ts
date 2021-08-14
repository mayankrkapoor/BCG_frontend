import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyMetricsComponent } from './policy-metrics.component';

describe('PolicyMetricsComponent', () => {
  let component: PolicyMetricsComponent;
  let fixture: ComponentFixture<PolicyMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
