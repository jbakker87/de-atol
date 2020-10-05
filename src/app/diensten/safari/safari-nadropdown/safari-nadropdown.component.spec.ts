import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariNadropdownComponent } from './safari-nadropdown.component';

describe('SafariNadropdownComponent', () => {
  let component: SafariNadropdownComponent;
  let fixture: ComponentFixture<SafariNadropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafariNadropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafariNadropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
