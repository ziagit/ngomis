import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTypesComponent } from './news-types.component';

describe('NewsTypesComponent', () => {
  let component: NewsTypesComponent;
  let fixture: ComponentFixture<NewsTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
