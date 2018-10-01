import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeaveRequestComponent } from './apply-leave-request.component';

describe('ApplyLeaveRequestComponent', () => {
  let component: ApplyLeaveRequestComponent;
  let fixture: ComponentFixture<ApplyLeaveRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyLeaveRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
