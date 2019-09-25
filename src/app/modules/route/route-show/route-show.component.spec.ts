import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteShowComponent } from './route-show.component';

describe('RouteShowComponent', () => {
  let component: RouteShowComponent;
  let fixture: ComponentFixture<RouteShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
