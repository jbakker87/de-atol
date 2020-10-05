import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariScheduleComponent } from './safari-schedule.component';

describe('SafariScheduleComponent', () => {
  let component: SafariScheduleComponent;
  let fixture: ComponentFixture<SafariScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafariScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafariScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
