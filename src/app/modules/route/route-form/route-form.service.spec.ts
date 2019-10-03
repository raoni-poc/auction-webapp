import {TestBed} from '@angular/core/testing';

import {RouteFormService} from './route-form.service';

describe('RouteFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteFormService = TestBed.get(RouteFormService);
    expect(service).toBeTruthy();
  });
});
