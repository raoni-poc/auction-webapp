import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDestroyComponent } from './country-destroy.component';

describe('CountryDestroyComponent', () => {
  let component: CountryDestroyComponent;
  let fixture: ComponentFixture<CountryDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
