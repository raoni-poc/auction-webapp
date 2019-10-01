import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RequirementTableComponent} from './requirement-table.component';

describe('RequirementTableComponent', () => {
  let component: RequirementTableComponent;
  let fixture: ComponentFixture<RequirementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
