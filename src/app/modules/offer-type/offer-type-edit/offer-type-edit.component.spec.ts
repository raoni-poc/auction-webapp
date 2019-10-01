import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OfferTypeEditComponent} from './offer-type-edit.component';

describe('OfferTypeEditComponent', () => {
  let component: OfferTypeEditComponent;
  let fixture: ComponentFixture<OfferTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfferTypeEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
