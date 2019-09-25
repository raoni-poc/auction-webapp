import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementTypeShowComponent } from './requirement-type-show.component';

describe('RequirementTypeShowComponent', () => {
  let component: RequirementTypeShowComponent;
  let fixture: ComponentFixture<RequirementTypeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementTypeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementTypeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
