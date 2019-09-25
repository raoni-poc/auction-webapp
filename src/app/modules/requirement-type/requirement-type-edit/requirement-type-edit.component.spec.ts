import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementTypeEditComponent } from './requirement-type-edit.component';

describe('RequirementTypeEditComponent', () => {
  let component: RequirementTypeEditComponent;
  let fixture: ComponentFixture<RequirementTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
