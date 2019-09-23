import { TestBed } from '@angular/core/testing';

import { DocumentTypeHttpService } from './document-type-http.service';

describe('DocumentTypeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentTypeHttpService = TestBed.get(DocumentTypeHttpService);
    expect(service).toBeTruthy();
  });
});
