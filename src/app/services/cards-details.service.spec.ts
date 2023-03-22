import { TestBed } from '@angular/core/testing';

import { CardsDetailsService } from './cards-details.service';

describe('CardsDetailsService', () => {
  let service: CardsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
