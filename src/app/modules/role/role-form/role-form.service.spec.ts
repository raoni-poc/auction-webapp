import {TestBed} from '@angular/core/testing';

import {RoleFormService} from './role-form.service';

describe('RoleFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleFormService = TestBed.get(RoleFormService);
    expect(service).toBeTruthy();
  });
});
