import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInsertComponent } from './document-insert.component';

describe('DocumentInsertComponent', () => {
  let component: DocumentInsertComponent;
  let fixture: ComponentFixture<DocumentInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
