import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StateDestroyComponent} from './state-destroy.component';

describe('StateDestroyComponent', () => {
  let component: StateDestroyComponent;
  let fixture: ComponentFixture<StateDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StateDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
