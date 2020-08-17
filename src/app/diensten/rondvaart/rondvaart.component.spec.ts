import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RondvaartComponent } from './rondvaart.component';

describe('RondvaartComponent', () => {
  let component: RondvaartComponent;
  let fixture: ComponentFixture<RondvaartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RondvaartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondvaartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
