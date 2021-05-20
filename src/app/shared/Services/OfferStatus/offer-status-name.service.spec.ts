import { TestBed } from '@angular/core/testing';

import { OfferStatusNameService } from './offer-status-name.service';

describe('OfferStatusNameService', () => {
  let service: OfferStatusNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferStatusNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
