import { TestBed } from '@angular/core/testing';

import { AccoountNumberValidationService } from './accoount-number-validation.service';

describe('AccoountNumberValidationService', () => {
  let service: AccoountNumberValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccoountNumberValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
