import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementTypeInsertComponent } from './requirement-type-insert.component';

describe('RequirementTypeInsertComponent', () => {
  let component: RequirementTypeInsertComponent;
  let fixture: ComponentFixture<RequirementTypeInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementTypeInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementTypeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
