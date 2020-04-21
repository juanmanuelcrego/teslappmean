import { TestBed } from '@angular/core/testing';

import { CorrService } from './corr.service';

describe('CorrService', () => {
  let service: CorrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
