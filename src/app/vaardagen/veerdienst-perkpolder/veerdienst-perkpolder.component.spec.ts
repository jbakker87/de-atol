import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeerdienstPerkpolderComponent } from './veerdienst-perkpolder.component';

describe('VeerdienstPerkpolderComponent', () => {
  let component: VeerdienstPerkpolderComponent;
  let fixture: ComponentFixture<VeerdienstPerkpolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeerdienstPerkpolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeerdienstPerkpolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
