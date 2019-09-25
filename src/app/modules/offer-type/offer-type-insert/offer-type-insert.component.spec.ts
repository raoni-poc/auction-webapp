import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTypeInsertComponent } from './offer-type-insert.component';

describe('OfferTypeInsertComponent', () => {
  let component: OfferTypeInsertComponent;
  let fixture: ComponentFixture<OfferTypeInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferTypeInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTypeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
