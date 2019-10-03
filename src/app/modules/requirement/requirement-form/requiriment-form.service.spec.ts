import {TestBed} from '@angular/core/testing';

import {RequirimentFormService} from './requiriment-form.service';

describe('RequirimentFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequirimentFormService = TestBed.get(RequirimentFormService);
    expect(service).toBeTruthy();
  });
});
