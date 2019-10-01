import {TestBed} from '@angular/core/testing';

import {CargoHttpService} from './cargo-http.service';

describe('CargoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargoHttpService = TestBed.get(CargoHttpService);
    expect(service).toBeTruthy();
  });
});
