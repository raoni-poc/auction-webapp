import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddressDestroyComponent} from './address-destroy.component';

describe('AddressDrestroyComponent', () => {
  let component: AddressDestroyComponent;
  let fixture: ComponentFixture<AddressDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
