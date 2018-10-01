import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectLeaveRequestComponent } from './reject-leave-request.component';

describe('RejectLeaveRequestComponent', () => {
  let component: RejectLeaveRequestComponent;
  let fixture: ComponentFixture<RejectLeaveRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectLeaveRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
