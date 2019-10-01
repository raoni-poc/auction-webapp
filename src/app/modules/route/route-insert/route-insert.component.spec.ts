import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RouteInsertComponent} from './route-insert.component';

describe('RouteInsertComponent', () => {
  let component: RouteInsertComponent;
  let fixture: ComponentFixture<RouteInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteInsertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
