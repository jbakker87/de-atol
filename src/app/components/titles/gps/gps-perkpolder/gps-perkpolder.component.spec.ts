import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsPerkpolderComponent } from './gps-perkpolder.component';

describe('GpsPerkpolderComponent', () => {
  let component: GpsPerkpolderComponent;
  let fixture: ComponentFixture<GpsPerkpolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpsPerkpolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsPerkpolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
