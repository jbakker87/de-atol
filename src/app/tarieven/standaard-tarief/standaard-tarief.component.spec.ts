import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaardTariefComponent } from './standaard-tarief.component';

describe('StandaardTariefComponent', () => {
  let component: StandaardTariefComponent;
  let fixture: ComponentFixture<StandaardTariefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandaardTariefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaardTariefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
