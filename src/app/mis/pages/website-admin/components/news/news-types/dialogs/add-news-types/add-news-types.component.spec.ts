import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsTypesComponent } from './add-news-types.component';

describe('AddNewsTypesComponent', () => {
  let component: AddNewsTypesComponent;
  let fixture: ComponentFixture<AddNewsTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
