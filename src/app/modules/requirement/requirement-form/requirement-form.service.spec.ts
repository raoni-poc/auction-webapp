import {TestBed} from '@angular/core/testing';

import {RequirementFormService} from './requirement-form.service';

describe('RequirementFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequirementFormService = TestBed.get(RequirementFormService);
    expect(service).toBeTruthy();
  });
});
