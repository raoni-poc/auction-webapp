import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatusShowComponent } from './account-status-show.component';

describe('AccountStatusShowComponent', () => {
  let component: AccountStatusShowComponent;
  let fixture: ComponentFixture<AccountStatusShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStatusShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatusShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
