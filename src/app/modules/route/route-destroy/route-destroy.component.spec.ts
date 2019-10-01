import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RouteDestroyComponent} from './route-destroy.component';

describe('RouteDestroyComponent', () => {
  let component: RouteDestroyComponent;
  let fixture: ComponentFixture<RouteDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
