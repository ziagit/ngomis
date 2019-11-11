import { TestBed } from '@angular/core/testing';

import { KeypersonsServiceService } from './keypersons-service.service';

describe('KeypersonsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeypersonsServiceService = TestBed.get(KeypersonsServiceService);
    expect(service).toBeTruthy();
  });
});
