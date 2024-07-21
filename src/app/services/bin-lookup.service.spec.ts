import { TestBed } from '@angular/core/testing';

import { BinLookupService } from './bin-lookup.service';

describe('BinLookupService', () => {
  let service: BinLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
