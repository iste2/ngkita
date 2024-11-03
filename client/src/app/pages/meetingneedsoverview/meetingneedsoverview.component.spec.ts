import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingneedsoverviewComponent } from './meetingneedsoverview.component';

describe('MeetingneedsoverviewComponent', () => {
  let component: MeetingneedsoverviewComponent;
  let fixture: ComponentFixture<MeetingneedsoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingneedsoverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingneedsoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
