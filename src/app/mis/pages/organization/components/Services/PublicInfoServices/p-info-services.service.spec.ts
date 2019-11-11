import { TestBed } from '@angular/core/testing';

import { PInfoServicesService } from './p-info-services.service';

describe('PInfoServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PInfoServicesService = TestBed.get(PInfoServicesService);
    expect(service).toBeTruthy();
  });
});
