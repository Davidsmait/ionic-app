import { TestBed } from '@angular/core/testing';

import { AkkaApiService } from './akka-api.service';

describe('AkkaApiService', () => {
  let service: AkkaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkkaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
