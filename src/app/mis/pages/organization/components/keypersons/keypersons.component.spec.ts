import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypersonsComponent } from './keypersons.component';

describe('KeypersonsComponent', () => {
  let component: KeypersonsComponent;
  let fixture: ComponentFixture<KeypersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeypersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
