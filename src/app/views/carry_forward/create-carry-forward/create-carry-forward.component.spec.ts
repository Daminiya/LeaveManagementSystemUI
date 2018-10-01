import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarryForwardComponent } from './create-carry-forward.component';

describe('CreateCarryForwardComponent', () => {
  let component: CreateCarryForwardComponent;
  let fixture: ComponentFixture<CreateCarryForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCarryForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarryForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
