import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInformationComponent } from './simple-information.component';

describe('SimpleInformationComponent', () => {
  let component: SimpleInformationComponent;
  let fixture: ComponentFixture<SimpleInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
