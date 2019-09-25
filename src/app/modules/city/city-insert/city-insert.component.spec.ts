import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityInsertComponent } from './city-insert.component';

describe('CityInsertComponent', () => {
  let component: CityInsertComponent;
  let fixture: ComponentFixture<CityInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
