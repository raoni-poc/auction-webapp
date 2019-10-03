import {TestBed} from '@angular/core/testing';

import {CountryFormService} from './country-form.service';

describe('CountryFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryFormService = TestBed.get(CountryFormService);
    expect(service).toBeTruthy();
  });
});
