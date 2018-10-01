import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveRequestComponent } from './view-leave-request.component';

describe('ViewLeaveRequestComponent', () => {
  let component: ViewLeaveRequestComponent;
  let fixture: ComponentFixture<ViewLeaveRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLeaveRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
