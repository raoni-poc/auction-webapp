import {TestBed} from '@angular/core/testing';

import {OfferFormService} from './offer-form.service';

describe('OfferFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferFormService = TestBed.get(OfferFormService);
    expect(service).toBeTruthy();
  });
});
