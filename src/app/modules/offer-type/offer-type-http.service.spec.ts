import {TestBed} from '@angular/core/testing';

import {OfferTypeHttpService} from './offer-type-http.service';

describe('OfferTypeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferTypeHttpService = TestBed.get(OfferTypeHttpService);
    expect(service).toBeTruthy();
  });
});
