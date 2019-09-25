import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferInsertComponent } from './offer-insert.component';

describe('OfferInsertComponent', () => {
  let component: OfferInsertComponent;
  let fixture: ComponentFixture<OfferInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
