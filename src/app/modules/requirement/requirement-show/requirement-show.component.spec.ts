import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementShowComponent } from './requirement-show.component';

describe('RequirementShowComponent', () => {
  let component: RequirementShowComponent;
  let fixture: ComponentFixture<RequirementShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
