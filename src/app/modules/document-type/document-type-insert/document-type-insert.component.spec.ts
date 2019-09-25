import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeInsertComponent } from './document-type-insert.component';

describe('DocumentTypeInsertComponent', () => {
  let component: DocumentTypeInsertComponent;
  let fixture: ComponentFixture<DocumentTypeInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTypeInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTypeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
