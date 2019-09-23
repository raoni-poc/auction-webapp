import { TestBed } from '@angular/core/testing';

import { DocumentHttpService } from './document-http.service';

describe('DocumentHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentHttpService = TestBed.get(DocumentHttpService);
    expect(service).toBeTruthy();
  });
});
