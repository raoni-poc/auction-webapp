import { TestBed } from '@angular/core/testing';

import { RouteHttpService } from './route-http.service';

describe('RouteHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteHttpService = TestBed.get(RouteHttpService);
    expect(service).toBeTruthy();
  });
});
