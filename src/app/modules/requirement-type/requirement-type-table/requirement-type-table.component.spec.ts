import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RequirementTypeTableComponent} from './requirement-type-table.component';

describe('RequirementTypeTableComponent', () => {
  let component: RequirementTypeTableComponent;
  let fixture: ComponentFixture<RequirementTypeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementTypeTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
