import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCancelLeaveRequestComponent } from './view-cancel-leave-request.component';

describe('ViewCancelLeaveRequestComponent', () => {
  let component: ViewCancelLeaveRequestComponent;
  let fixture: ComponentFixture<ViewCancelLeaveRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCancelLeaveRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCancelLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
