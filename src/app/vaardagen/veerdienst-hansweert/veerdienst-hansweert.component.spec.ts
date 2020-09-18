import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeerdienstHansweertComponent } from './veerdienst-hansweert.component';

describe('VeerdienstHansweertComponent', () => {
  let component: VeerdienstHansweertComponent;
  let fixture: ComponentFixture<VeerdienstHansweertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeerdienstHansweertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeerdienstHansweertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
