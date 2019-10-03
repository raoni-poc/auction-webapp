import {TestBed} from '@angular/core/testing';

import {OfferTypeFormService} from './offer-type-form.service';

describe('OfferTypeFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferTypeFormService = TestBed.get(OfferTypeFormService);
    expect(service).toBeTruthy();
  });
});
