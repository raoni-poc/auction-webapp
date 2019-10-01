import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RequirementInsertComponent} from './requirement-insert.component';

describe('RequirementInsertComponent', () => {
  let component: RequirementInsertComponent;
  let fixture: ComponentFixture<RequirementInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementInsertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
