import { Component, OnInit } from '@angular/core';
import { MeetingneedsService } from './meetingneeds.service';
import {
  CapacityEntry,
  CapacityEntryType,
  capacityEntryTypeDisplayValue,
} from './CapacityEntry';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-meetingneeds',
  templateUrl: './meetingneeds.component.html',
  styleUrl: './meetingneeds.component.scss',
})
export class MeetingneedsComponent implements OnInit {
  capacityEntries: CapacityEntry[] = [];
  capacityEntryTypes: string[] = [];

  constructor(public meetingneedsService: MeetingneedsService) {}

  ngOnInit(): void {
    this.capacityEntryTypes = [
      capacityEntryTypeDisplayValue(CapacityEntryType.Job),
      capacityEntryTypeDisplayValue(CapacityEntryType.EmployeeSuggestion),
      capacityEntryTypeDisplayValue(CapacityEntryType.EmployeeHasJob),
      capacityEntryTypeDisplayValue(CapacityEntryType.Demand),
    ];
    this.capacityEntries = this.meetingneedsService.capacityEntries;
  }

  loadCapacityEntries() {
    this.capacityEntries = this.meetingneedsService.capacityEntries;
  }

  protected readonly capacityEntryTypeDisplayValue =
    capacityEntryTypeDisplayValue;
}
