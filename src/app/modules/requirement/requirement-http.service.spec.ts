import { TestBed } from '@angular/core/testing';

import { RequirementHttpService } from './requirement-http.service';

describe('RequirementHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequirementHttpService = TestBed.get(RequirementHttpService);
    expect(service).toBeTruthy();
  });
});
