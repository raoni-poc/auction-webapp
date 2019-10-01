import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BidShowComponent} from './bid-show.component';

describe('BidShowComponent', () => {
  let component: BidShowComponent;
  let fixture: ComponentFixture<BidShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BidShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
