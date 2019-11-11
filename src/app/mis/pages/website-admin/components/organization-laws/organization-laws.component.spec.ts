import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationLawsComponent } from './organization-laws.component';

describe('OrganizationLawsComponent', () => {
  let component: OrganizationLawsComponent;
  let fixture: ComponentFixture<OrganizationLawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationLawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationLawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
