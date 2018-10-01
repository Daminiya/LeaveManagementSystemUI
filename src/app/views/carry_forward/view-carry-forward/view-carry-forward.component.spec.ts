import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarryForwardComponent } from './view-carry-forward.component';

describe('ViewCarryForwardComponent', () => {
  let component: ViewCarryForwardComponent;
  let fixture: ComponentFixture<ViewCarryForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCarryForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarryForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
