import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BidDestroyComponent} from './bid-destroy.component';

describe('BidDestroyComponent', () => {
  let component: BidDestroyComponent;
  let fixture: ComponentFixture<BidDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BidDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
