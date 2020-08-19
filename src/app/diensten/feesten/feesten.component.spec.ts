import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeestenComponent } from './feesten.component';

describe('FeestenComponent', () => {
  let component: FeestenComponent;
  let fixture: ComponentFixture<FeestenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeestenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeestenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
