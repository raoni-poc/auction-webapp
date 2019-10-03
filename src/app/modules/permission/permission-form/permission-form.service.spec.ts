import {TestBed} from '@angular/core/testing';

import {PermissionFormService} from './permission-form.service';

describe('PermissionFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermissionFormService = TestBed.get(PermissionFormService);
    expect(service).toBeTruthy();
  });
});
