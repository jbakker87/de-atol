import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeerdienstNadropdownComponent } from './veerdienst-nadropdown.component';

describe('VeerdienstNadropdownComponent', () => {
  let component: VeerdienstNadropdownComponent;
  let fixture: ComponentFixture<VeerdienstNadropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeerdienstNadropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeerdienstNadropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
