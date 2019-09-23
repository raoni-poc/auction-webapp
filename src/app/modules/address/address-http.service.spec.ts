import { TestBed } from '@angular/core/testing';

import { AddressHttpService } from './address-http.service';

describe('AddressHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddressHttpService = TestBed.get(AddressHttpService);
    expect(service).toBeTruthy();
  });
});
