import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CityDestroyComponent} from './city-destroy.component';

describe('CityDestroyComponent', () => {
  let component: CityDestroyComponent;
  let fixture: ComponentFixture<CityDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityDestroyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
