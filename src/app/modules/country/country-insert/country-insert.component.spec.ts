import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInsertComponent } from './country-insert.component';

describe('CountryInsertComponent', () => {
  let component: CountryInsertComponent;
  let fixture: ComponentFixture<CountryInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
