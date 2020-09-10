import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverenZeehondComponent } from './reserveren-zeehond.component';

describe('ReserverenZeehondComponent', () => {
  let component: ReserverenZeehondComponent;
  let fixture: ComponentFixture<ReserverenZeehondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserverenZeehondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverenZeehondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
