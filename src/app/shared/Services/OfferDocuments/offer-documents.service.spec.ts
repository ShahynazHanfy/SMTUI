import { TestBed } from '@angular/core/testing';

import { OfferDocumentsService } from './offer-documents.service';

describe('OfferDocumentsService', () => {
  let service: OfferDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
