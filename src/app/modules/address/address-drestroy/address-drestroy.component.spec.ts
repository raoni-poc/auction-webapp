import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddressDrestroyComponent} from './address-drestroy.component';

describe('AddressDrestroyComponent', () => {
  let component: AddressDrestroyComponent;
  let fixture: ComponentFixture<AddressDrestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressDrestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDrestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
