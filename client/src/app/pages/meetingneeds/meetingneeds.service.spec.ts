import { TestBed } from '@angular/core/testing';

import { MeetingneedsService } from './meetingneeds.service';

describe('MeetingneedsService', () => {
  let service: MeetingneedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingneedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
