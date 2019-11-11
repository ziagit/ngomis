import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixMonthsReportComponent } from './six-months-report.component';

describe('SixMonthsReportComponent', () => {
  let component: SixMonthsReportComponent;
  let fixture: ComponentFixture<SixMonthsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixMonthsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixMonthsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
