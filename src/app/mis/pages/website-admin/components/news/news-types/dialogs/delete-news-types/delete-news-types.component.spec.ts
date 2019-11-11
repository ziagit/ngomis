import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewsTypesComponent } from './delete-news-types.component';

describe('DeleteNewsTypesComponent', () => {
  let component: DeleteNewsTypesComponent;
  let fixture: ComponentFixture<DeleteNewsTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNewsTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
