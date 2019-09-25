import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidInsertComponent } from './bid-insert.component';

describe('BidInsertComponent', () => {
  let component: BidInsertComponent;
  let fixture: ComponentFixture<BidInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
