import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMatComponent } from './table-mat.component';

describe('TableMatComponent', () => {
  let component: TableMatComponent;
  let fixture: ComponentFixture<TableMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
