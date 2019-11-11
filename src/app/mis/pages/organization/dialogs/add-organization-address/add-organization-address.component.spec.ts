import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationAddressComponent } from './add-organization-address.component';

describe('AddOrganizationAddressComponent', () => {
  let component: AddOrganizationAddressComponent;
  let fixture: ComponentFixture<AddOrganizationAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizationAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganizationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
