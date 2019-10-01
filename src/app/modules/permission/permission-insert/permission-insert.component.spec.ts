import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PermissionInsertComponent} from './permission-insert.component';

describe('PermissionInsertComponent', () => {
  let component: PermissionInsertComponent;
  let fixture: ComponentFixture<PermissionInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionInsertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
