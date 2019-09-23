import { TestBed } from '@angular/core/testing';

import { BidHttpService } from './bid-http.service';

describe('BidHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BidHttpService = TestBed.get(BidHttpService);
    expect(service).toBeTruthy();
  });
});
