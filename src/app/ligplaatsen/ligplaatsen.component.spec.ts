import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigplaatsenComponent } from './ligplaatsen.component';

describe('LigplaatsenComponent', () => {
  let component: LigplaatsenComponent;
  let fixture: ComponentFixture<LigplaatsenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigplaatsenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigplaatsenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
