import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBiographyComponent } from './delete-biography.component';

describe('DeleteBiographyComponent', () => {
  let component: DeleteBiographyComponent;
  let fixture: ComponentFixture<DeleteBiographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBiographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
