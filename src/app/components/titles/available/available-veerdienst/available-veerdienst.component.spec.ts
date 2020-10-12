import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableVeerdienstComponent } from './available-veerdienst.component';

describe('AvailableVeerdienstComponent', () => {
  let component: AvailableVeerdienstComponent;
  let fixture: ComponentFixture<AvailableVeerdienstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableVeerdienstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableVeerdienstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
