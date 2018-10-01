import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarryForwardRequestComponent } from './view-carry-forward-request.component';

describe('ViewCarryForwardRequestComponent', () => {
  let component: ViewCarryForwardRequestComponent;
  let fixture: ComponentFixture<ViewCarryForwardRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCarryForwardRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarryForwardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
