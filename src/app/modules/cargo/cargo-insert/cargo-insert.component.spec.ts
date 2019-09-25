import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoInsertComponent } from './cargo-insert.component';

describe('CargoInsertComponent', () => {
  let component: CargoInsertComponent;
  let fixture: ComponentFixture<CargoInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
