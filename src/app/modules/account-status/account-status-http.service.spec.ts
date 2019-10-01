import {TestBed} from '@angular/core/testing';

import {AccountStatusHttpService} from './account-status-http.service';

describe('AccountStatusHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountStatusHttpService = TestBed.get(AccountStatusHttpService);
    expect(service).toBeTruthy();
  });
});
