import {TestBed} from '@angular/core/testing';

import {BidFormService} from './bid-form.service';

describe('BidFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BidFormService = TestBed.get(BidFormService);
    expect(service).toBeTruthy();
  });
});
