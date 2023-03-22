import { TestBed } from '@angular/core/testing';

import { BackUrlService } from './back-url.service';

describe('BackUrlService', () => {
  let service: BackUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
