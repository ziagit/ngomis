import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsTypesComponent } from './edit-news-types.component';

describe('EditNewsTypesComponent', () => {
  let component: EditNewsTypesComponent;
  let fixture: ComponentFixture<EditNewsTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
