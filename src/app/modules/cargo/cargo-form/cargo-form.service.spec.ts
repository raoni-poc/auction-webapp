import {TestBed} from '@angular/core/testing';

import {CargoFormService} from './cargo-form.service';

describe('CargoFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargoFormService = TestBed.get(CargoFormService);
    expect(service).toBeTruthy();
  });
});
