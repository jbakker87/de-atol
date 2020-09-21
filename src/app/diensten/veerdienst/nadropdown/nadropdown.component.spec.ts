import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NadropdownComponent } from './nadropdown.component';

describe('NadropdownComponent', () => {
  let component: NadropdownComponent;
  let fixture: ComponentFixture<NadropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NadropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NadropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
