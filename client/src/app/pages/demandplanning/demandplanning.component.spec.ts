import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandplanningComponent } from './demandplanning.component';

describe('DemandplanningComponent', () => {
  let component: DemandplanningComponent;
  let fixture: ComponentFixture<DemandplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemandplanningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
