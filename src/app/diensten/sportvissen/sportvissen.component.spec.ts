import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportvissenComponent } from './sportvissen.component';

describe('SportvissenComponent', () => {
  let component: SportvissenComponent;
  let fixture: ComponentFixture<SportvissenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportvissenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportvissenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
