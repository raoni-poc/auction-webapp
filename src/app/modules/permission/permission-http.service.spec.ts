import {TestBed} from '@angular/core/testing';

import {PermissionHttpService} from './permission-http.service';

describe('PermissionHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermissionHttpService = TestBed.get(PermissionHttpService);
    expect(service).toBeTruthy();
  });
});
