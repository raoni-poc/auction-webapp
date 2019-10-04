import {TestBed} from '@angular/core/testing';

import {RequirementTypeFormService} from './requirement-type-form.service';

describe('RequirementTypeFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequirementTypeFormService = TestBed.get(RequirementTypeFormService);
    expect(service).toBeTruthy();
  });
});
