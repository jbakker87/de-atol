import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportvissenTariefComponent } from './sportvissen-tarief.component';

describe('SportvissenTariefComponent', () => {
  let component: SportvissenTariefComponent;
  let fixture: ComponentFixture<SportvissenTariefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportvissenTariefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportvissenTariefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
