import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectCarryForwardRequestComponent } from './reject-carry-forward-request.component';

describe('RejectCarryForwardRequestComponent', () => {
  let component: RejectCarryForwardRequestComponent;
  let fixture: ComponentFixture<RejectCarryForwardRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectCarryForwardRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectCarryForwardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
