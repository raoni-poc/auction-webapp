import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RequirementTypeDestroyComponent} from './requirement-type-destroy.component';

describe('RequirementTypeDestroyComponent', () => {
  let component: RequirementTypeDestroyComponent;
  let fixture: ComponentFixture<RequirementTypeDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementTypeDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementTypeDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
