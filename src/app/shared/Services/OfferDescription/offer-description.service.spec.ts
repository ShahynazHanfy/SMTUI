import { TestBed } from '@angular/core/testing';

import { OfferDescriptionService } from './offer-description.service';

describe('OfferDescriptionService', () => {
  let service: OfferDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
