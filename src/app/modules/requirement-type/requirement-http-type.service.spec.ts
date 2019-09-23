import { TestBed } from '@angular/core/testing';

import { RequirementHttpTypeService } from './requirement-http-type.service';

describe('RequirementHttpTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequirementHttpTypeService = TestBed.get(RequirementHttpTypeService);
    expect(service).toBeTruthy();
  });
});
