import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InActivitiesComponent } from './in-activities.component';

describe('InActivitiesComponent', () => {
  let component: InActivitiesComponent;
  let fixture: ComponentFixture<InActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
