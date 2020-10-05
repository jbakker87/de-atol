import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariTariefComponent } from './safari-tarief.component';

describe('SafariTariefComponent', () => {
  let component: SafariTariefComponent;
  let fixture: ComponentFixture<SafariTariefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafariTariefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafariTariefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
