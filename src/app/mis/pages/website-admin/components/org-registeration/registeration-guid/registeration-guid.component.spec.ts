import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationGuidComponent } from './registeration-guid.component';

describe('RegisterationGuidComponent', () => {
  let component: RegisterationGuidComponent;
  let fixture: ComponentFixture<RegisterationGuidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterationGuidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationGuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
