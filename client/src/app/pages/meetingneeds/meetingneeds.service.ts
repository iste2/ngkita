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
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 60,
    },
    {
      id: '52',
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeHasJob,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 7, 31),
      capacityHoursPerWeek: 15,
    },
    {
      id: '33',
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeSuggestion,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 10,
    },
    {
      id: '52',
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeHasJob,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 15,
    },
    {
      id: '41',
      show: true,
      capacityEntryType: CapacityEntryType.Demand,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 80,
    },
    {
      id: '41',
      show: true,
      capacityEntryType: CapacityEntryType.Demand,
      startDate: new Date(2024, 5, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 80,
    },
  ];
}
