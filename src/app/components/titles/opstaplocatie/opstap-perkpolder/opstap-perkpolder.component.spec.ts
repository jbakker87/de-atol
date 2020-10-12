import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpstapPerkpolderComponent } from './opstap-perkpolder.component';

describe('OpstapPerkpolderComponent', () => {
  let component: OpstapPerkpolderComponent;
  let fixture: ComponentFixture<OpstapPerkpolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpstapPerkpolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpstapPerkpolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
