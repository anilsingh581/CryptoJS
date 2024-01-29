import { TestBed } from '@angular/core/testing';

import { EncrDecrServiceService } from './encr-decr-service.service';

describe('EncrDecrServiceService', () => {
  let service: EncrDecrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncrDecrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
