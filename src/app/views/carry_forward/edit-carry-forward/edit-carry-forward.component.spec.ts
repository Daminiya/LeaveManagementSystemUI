import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarryForwardComponent } from './edit-carry-forward.component';

describe('EditCarryForwardComponent', () => {
  let component: EditCarryForwardComponent;
  let fixture: ComponentFixture<EditCarryForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCarryForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarryForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
