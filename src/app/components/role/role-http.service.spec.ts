import { TestBed } from '@angular/core/testing';

import { RoleHttpService } from './role-http.service';

describe('RoleHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleHttpService = TestBed.get(RoleHttpService);
    expect(service).toBeTruthy();
  });
});
