import { TestBed } from '@angular/core/testing';

import { StockLookupService } from './stock-lookup.service';

describe('StockLookupService', () => {
  let service: StockLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
