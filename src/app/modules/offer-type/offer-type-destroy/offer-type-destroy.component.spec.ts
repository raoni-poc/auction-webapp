import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OfferTypeDestroyComponent} from './offer-type-destroy.component';

describe('OfferTypeDestroyComponent', () => {
  let component: OfferTypeDestroyComponent;
  let fixture: ComponentFixture<OfferTypeDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfferTypeDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTypeDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
