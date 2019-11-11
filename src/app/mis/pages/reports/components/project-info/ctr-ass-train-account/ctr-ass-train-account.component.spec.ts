import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrAssTrainAccountComponent } from './ctr-ass-train-account.component';

describe('CtrAssTrainAccountComponent', () => {
  let component: CtrAssTrainAccountComponent;
  let fixture: ComponentFixture<CtrAssTrainAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrAssTrainAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrAssTrainAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
