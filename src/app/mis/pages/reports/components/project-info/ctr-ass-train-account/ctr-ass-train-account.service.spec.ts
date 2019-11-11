import { TestBed } from '@angular/core/testing';

import { CtrAssTrainAccountService } from './ctr-ass-train-account.service';

describe('CtrAssTrainAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CtrAssTrainAccountService = TestBed.get(CtrAssTrainAccountService);
    expect(service).toBeTruthy();
  });
});
