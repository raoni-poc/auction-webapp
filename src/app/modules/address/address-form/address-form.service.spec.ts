import {TestBed} from '@angular/core/testing';

import {AddressFormService} from './address-form.service';

describe('AddressFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddressFormService = TestBed.get(AddressFormService);
    expect(service).toBeTruthy();
  });
});
