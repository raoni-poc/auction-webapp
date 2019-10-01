import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocumentTypeDestroyComponent} from './document-type-destroy.component';

describe('DocumentTypeDestroyComponent', () => {
  let component: DocumentTypeDestroyComponent;
  let fixture: ComponentFixture<DocumentTypeDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentTypeDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTypeDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
