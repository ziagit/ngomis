import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRegisterationComponent } from './org-registeration.component';

describe('OrgRegisterationComponent', () => {
  let component: OrgRegisterationComponent;
  let fixture: ComponentFixture<OrgRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
