import { Injectable } from '@angular/core';
import { CapacityEntry, CapacityEntryType } from './CapacityEntry';

@Injectable({
  providedIn: 'root',
})
export class MeetingneedsService {
  capacityEntries: CapacityEntry[] = [
    {
      id: '24',
      show: true,
      capacityEntryType: CapacityEntryType.Job,
      startDate: new Date(2024, 1, 1),
      endDate: new Date(2024, 12, 31),
      capacityHoursPerWeek: 1,
    },
    {
      id: '33',
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeSuggestion,
      startDate: new Date(2024, 1, 1),
      endDate: new Date(2024, 12, 31),
      capacityHoursPerWeek: 1,
    },
    {
      id: '52',
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeHasJob,
      startDate: new Date(2024, 1, 1),
      endDate: new Date(2024, 12, 31),
      capacityHoursPerWeek: 1,
    },
    {
      id: '41',
      show: true,
      capacityEntryType: CapacityEntryType.Demand,
      startDate: new Date(2024, 1, 1),
      endDate: new Date(2024, 12, 31),
      capacityHoursPerWeek: 1,
    },
  ];
}
