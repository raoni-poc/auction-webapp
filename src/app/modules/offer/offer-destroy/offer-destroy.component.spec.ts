import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDestroyComponent } from './offer-destroy.component';

describe('OfferDestroyComponent', () => {
  let component: OfferDestroyComponent;
  let fixture: ComponentFixture<OfferDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
