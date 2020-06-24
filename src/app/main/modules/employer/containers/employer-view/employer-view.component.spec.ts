import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerViewComponent } from './employer-view.component';

describe('EmployerViewComponent', () => {
  let component: EmployerViewComponent;
  let fixture: ComponentFixture<EmployerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
