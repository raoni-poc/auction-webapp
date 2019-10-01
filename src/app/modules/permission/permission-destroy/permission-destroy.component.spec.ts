import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PermissionDestroyComponent} from './permission-destroy.component';

describe('PermissionDestroyComponent', () => {
  let component: PermissionDestroyComponent;
  let fixture: ComponentFixture<PermissionDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
