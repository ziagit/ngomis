import { TestBed } from '@angular/core/testing';

import { InternalEmployeesService } from './internal-employees.service';

describe('InternalEmployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternalEmployeesService = TestBed.get(InternalEmployeesService);
    expect(service).toBeTruthy();
  });
});
