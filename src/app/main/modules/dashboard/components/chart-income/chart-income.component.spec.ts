import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartIncomeComponent } from './chart-income.component';

describe('ChartIncomeComponent', () => {
  let component: ChartIncomeComponent;
  let fixture: ComponentFixture<ChartIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
