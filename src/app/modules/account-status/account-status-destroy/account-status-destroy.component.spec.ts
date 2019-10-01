import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountStatusDestroyComponent} from './account-status-destroy.component';

describe('AccountStatusDestroyComponent', () => {
  let component: AccountStatusDestroyComponent;
  let fixture: ComponentFixture<AccountStatusDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountStatusDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatusDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
