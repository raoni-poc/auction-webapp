import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatusFormComponent } from './account-status-form.component';

describe('AccountStatusFormComponent', () => {
  let component: AccountStatusFormComponent;
  let fixture: ComponentFixture<AccountStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStatusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
