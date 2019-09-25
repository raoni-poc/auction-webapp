import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTypeShowComponent } from './offer-type-show.component';

describe('OfferTypeShowComponent', () => {
  let component: OfferTypeShowComponent;
  let fixture: ComponentFixture<OfferTypeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferTypeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTypeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
