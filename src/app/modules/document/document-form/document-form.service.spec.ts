import {TestBed} from '@angular/core/testing';

import {DocumentFormService} from './document-form.service';

describe('DocumentFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentFormService = TestBed.get(DocumentFormService);
    expect(service).toBeTruthy();
  });
});
