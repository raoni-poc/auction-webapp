import {TestBed} from '@angular/core/testing';

import {StateFormService} from './state-form.service';

describe('StateFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateFormService = TestBed.get(StateFormService);
    expect(service).toBeTruthy();
  });
});
