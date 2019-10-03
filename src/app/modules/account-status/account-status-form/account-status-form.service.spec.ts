import {TestBed} from '@angular/core/testing';

import {AccountStatusFormService} from './account-status-form.service';

describe('AccountStatusFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountStatusFormService = TestBed.get(AccountStatusFormService);
    expect(service).toBeTruthy();
  });
});
