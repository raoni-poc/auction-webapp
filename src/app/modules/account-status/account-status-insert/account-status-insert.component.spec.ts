import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountStatusInsertComponent} from './account-status-insert.component';

describe('AccountStatusInsertComponent', () => {
  let component: AccountStatusInsertComponent;
  let fixture: ComponentFixture<AccountStatusInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountStatusInsertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatusInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
