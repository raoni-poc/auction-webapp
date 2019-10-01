import {TestBed} from '@angular/core/testing';

import {RequirementTypeHttpService} from './requirement-type-http.service';

describe('RequirementHttpTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequirementTypeHttpService = TestBed.get(RequirementTypeHttpService);
    expect(service).toBeTruthy();
  });
});
