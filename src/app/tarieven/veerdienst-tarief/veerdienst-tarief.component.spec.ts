import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeerdienstTariefComponent } from './veerdienst-tarief.component';

describe('VeerdienstTariefComponent', () => {
  let component: VeerdienstTariefComponent;
  let fixture: ComponentFixture<VeerdienstTariefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeerdienstTariefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeerdienstTariefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
