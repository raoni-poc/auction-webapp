import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountStatusEditComponent} from './account-status-edit.component';

describe('AccountStatusEditComponent', () => {
  let component: AccountStatusEditComponent;
  let fixture: ComponentFixture<AccountStatusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountStatusEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
