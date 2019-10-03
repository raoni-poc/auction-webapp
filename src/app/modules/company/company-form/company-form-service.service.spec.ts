import {TestBed} from '@angular/core/testing';

import {CompanyFormService} from './company-form.service';

describe('CompanyFormServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyFormService = TestBed.get(CompanyFormService);
    expect(service).toBeTruthy();
  });
});
