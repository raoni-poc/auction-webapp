import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocumentDestroyComponent} from './document-destroy.component';

describe('DocumentDestroyComponent', () => {
  let component: DocumentDestroyComponent;
  let fixture: ComponentFixture<DocumentDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
