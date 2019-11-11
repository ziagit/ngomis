import { TestBed } from '@angular/core/testing';

import { ExternalEmployeesService } from './external-employees.service';

describe('ExternalEmployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalEmployeesService = TestBed.get(ExternalEmployeesService);
    expect(service).toBeTruthy();
  });
});
