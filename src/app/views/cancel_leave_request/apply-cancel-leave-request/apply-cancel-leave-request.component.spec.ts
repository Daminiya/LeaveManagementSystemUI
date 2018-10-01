import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCancelLeaveRequestComponent } from './apply-cancel-leave-request.component';

describe('ApplyCancelLeaveRequestComponent', () => {
  let component: ApplyCancelLeaveRequestComponent;
  let fixture: ComponentFixture<ApplyCancelLeaveRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyCancelLeaveRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCancelLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
