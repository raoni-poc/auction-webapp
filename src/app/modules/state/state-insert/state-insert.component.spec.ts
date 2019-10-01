import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StateInsertComponent} from './state-insert.component';

describe('StateInsertComponent', () => {
  let component: StateInsertComponent;
  let fixture: ComponentFixture<StateInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StateInsertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
