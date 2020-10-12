import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpstapHansweertComponent } from './opstap-hansweert.component';

describe('OpstapHansweertComponent', () => {
  let component: OpstapHansweertComponent;
  let fixture: ComponentFixture<OpstapHansweertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpstapHansweertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpstapHansweertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
