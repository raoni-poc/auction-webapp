import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RequirementDestroyComponent} from './requirement-destroy.component';

describe('RequirementDestroyComponent', () => {
  let component: RequirementDestroyComponent;
  let fixture: ComponentFixture<RequirementDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
