import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingneedsComponent } from './meetingneeds.component';

describe('MeetingneedsComponent', () => {
  let component: MeetingneedsComponent;
  let fixture: ComponentFixture<MeetingneedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingneedsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeetingneedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
