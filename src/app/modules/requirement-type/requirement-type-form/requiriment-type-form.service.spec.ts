import {TestBed} from '@angular/core/testing';

import {RequirimentTypeFormService} from './requiriment-type-form.service';

describe('RequirimentTypeFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequirimentTypeFormService = TestBed.get(RequirimentTypeFormService);
    expect(service).toBeTruthy();
  });
});
