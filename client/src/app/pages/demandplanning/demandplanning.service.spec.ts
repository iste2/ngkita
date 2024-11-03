import { TestBed } from '@angular/core/testing';

import { DemandplanningService } from './demandplanning.service';

describe('DemandplanningService', () => {
  let service: DemandplanningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandplanningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
