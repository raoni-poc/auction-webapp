import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoDestroyComponent } from './cargo-destroy.component';

describe('CargoDestroyComponent', () => {
  let component: CargoDestroyComponent;
  let fixture: ComponentFixture<CargoDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
