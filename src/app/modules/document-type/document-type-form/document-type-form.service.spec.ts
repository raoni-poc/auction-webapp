import {TestBed} from '@angular/core/testing';

import {DocumentTypeFormService} from './document-type-form.service';

describe('DocumentTypeFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentTypeFormService = TestBed.get(DocumentTypeFormService);
    expect(service).toBeTruthy();
  });
});
