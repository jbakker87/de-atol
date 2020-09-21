import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveringenlijstComponent } from './reserveringenlijst.component';

describe('ReserveringenlijstComponent', () => {
  let component: ReserveringenlijstComponent;
  let fixture: ComponentFixture<ReserveringenlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveringenlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveringenlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
