import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocumentTypeShowComponent} from './document-type-show.component';

describe('DocumentTypeShowComponent', () => {
  let component: DocumentTypeShowComponent;
  let fixture: ComponentFixture<DocumentTypeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentTypeShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTypeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
