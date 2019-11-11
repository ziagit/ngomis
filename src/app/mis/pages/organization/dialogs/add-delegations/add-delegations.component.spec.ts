import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelegationsComponent } from './add-delegations.component';

describe('AddDelegationsComponent', () => {
  let component: AddDelegationsComponent;
  let fixture: ComponentFixture<AddDelegationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDelegationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDelegationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
