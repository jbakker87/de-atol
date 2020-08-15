import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeerdienstComponent } from './veerdienst.component';

describe('VeerdienstComponent', () => {
  let component: VeerdienstComponent;
  let fixture: ComponentFixture<VeerdienstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeerdienstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeerdienstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
