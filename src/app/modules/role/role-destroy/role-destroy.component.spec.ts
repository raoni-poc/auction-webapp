import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDestroyComponent } from './role-destroy.component';

describe('RoleDestroyComponent', () => {
  let component: RoleDestroyComponent;
  let fixture: ComponentFixture<RoleDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
