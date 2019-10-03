import {TestBed} from '@angular/core/testing';

import {CityFormService} from './city-form.service';

describe('CityFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityFormService = TestBed.get(CityFormService);
    expect(service).toBeTruthy();
  });
});
