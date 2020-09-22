import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveringenDetailsComponent } from './reserveringen-details.component';

describe('ReserveringenDetailsComponent', () => {
  let component: ReserveringenDetailsComponent;
  let fixture: ComponentFixture<ReserveringenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveringenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveringenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
