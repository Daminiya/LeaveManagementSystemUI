import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCarryForwardRequestComponent } from './apply-carry-forward-request.component';

describe('ApplyCarryForwardRequestComponent', () => {
  let component: ApplyCarryForwardRequestComponent;
  let fixture: ComponentFixture<ApplyCarryForwardRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyCarryForwardRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCarryForwardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
