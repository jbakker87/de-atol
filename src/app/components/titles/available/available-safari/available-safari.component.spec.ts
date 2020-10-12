import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSafariComponent } from './available-safari.component';

describe('AvailableSafariComponent', () => {
  let component: AvailableSafariComponent;
  let fixture: ComponentFixture<AvailableSafariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableSafariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableSafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
