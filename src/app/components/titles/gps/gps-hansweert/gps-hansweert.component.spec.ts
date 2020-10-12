import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsHansweertComponent } from './gps-hansweert.component';

describe('GpsHansweertComponent', () => {
  let component: GpsHansweertComponent;
  let fixture: ComponentFixture<GpsHansweertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpsHansweertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsHansweertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
