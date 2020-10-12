import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalInformationComponent } from './practical-information.component';

describe('PracticalInformationComponent', () => {
  let component: PracticalInformationComponent;
  let fixture: ComponentFixture<PracticalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
