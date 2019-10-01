import {TestBed} from '@angular/core/testing';

import {OfferHttpService} from './offer-http.service';

describe('OfferHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferHttpService = TestBed.get(OfferHttpService);
    expect(service).toBeTruthy();
  });
});
