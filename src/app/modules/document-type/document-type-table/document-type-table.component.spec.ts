import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeTableComponent } from './document-type-table.component';

describe('DocumentTypeTableComponent', () => {
  let component: DocumentTypeTableComponent;
  let fixture: ComponentFixture<DocumentTypeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTypeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
