import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationReasonsComponent } from './registeration-reasons.component';

describe('RegisterationReasonsComponent', () => {
  let component: RegisterationReasonsComponent;
  let fixture: ComponentFixture<RegisterationReasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterationReasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
