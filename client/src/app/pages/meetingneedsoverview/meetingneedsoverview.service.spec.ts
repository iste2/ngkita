import { TestBed } from '@angular/core/testing';

import { MeetingneedsoverviewService } from './meetingneedsoverview.service';

describe('MeetingneedsoverviewService', () => {
  let service: MeetingneedsoverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingneedsoverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
