import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StateShowComponent} from './state-show.component';

describe('StateShowComponent', () => {
  let component: StateShowComponent;
  let fixture: ComponentFixture<StateShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StateShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
