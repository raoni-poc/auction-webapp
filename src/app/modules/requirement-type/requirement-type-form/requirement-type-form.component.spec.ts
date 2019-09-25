import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementTypeFormComponent } from './requirement-type-form.component';

describe('RequirementTypeFormComponent', () => {
  let component: RequirementTypeFormComponent;
  let fixture: ComponentFixture<RequirementTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
