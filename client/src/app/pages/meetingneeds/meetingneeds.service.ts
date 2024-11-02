import { Injectable } from '@angular/core';
import { CapacityEntry, CapacityEntryType } from './CapacityEntry';
import { Facility } from './Facility';

@Injectable({
  providedIn: 'root',
})
export class MeetingneedsService {
  capacityEntryTypes: CapacityEntryType[] = [
    CapacityEntryType.Job,
    CapacityEntryType.EmployeeSuggestion,
    CapacityEntryType.EmployeeHasJob,
    CapacityEntryType.Demand,
  ];
  facilities: Facility[] = [
    { id: '1', name: 'Springfield' },
    { id: '2', name: 'Shelbyville' },
    { id: '3', name: 'Ogdenville' },
    { id: '4', name: 'North Haverbrook' },
    { id: '5', name: 'Capital' },
  ];
  capacityEntries: CapacityEntry[] = [];
  baseCapacityEntries: CapacityEntry[] = [
    {
      id: '24',
      facilityId: this.facilities[0].id,
      show: true,
      capacityEntryType: CapacityEntryType.Job,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 60,
    },
    {
      id: '52',
      facilityId: this.facilities[0].id,
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeHasJob,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 7, 31),
      capacityHoursPerWeek: 15,
    },
    {
      id: '33',
      facilityId: this.facilities[0].id,
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeSuggestion,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 10,
    },
    {
      id: '52',
      facilityId: this.facilities[0].id,
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeHasJob,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 15,
    },
    {
      id: '41',
      facilityId: this.facilities[0].id,
      show: true,
      capacityEntryType: CapacityEntryType.Demand,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 80,
    },
    {
      id: '41',
      facilityId: this.facilities[0].id,
      show: true,
      capacityEntryType: CapacityEntryType.Demand,
      startDate: new Date(2024, 5, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 80,
    },
  ];

  updateCapacityEntries(
    selectedFacilities: Facility[],
    selectedDateRange: Date[] | undefined,
    selectedCapacityEntryTypes: CapacityEntryType[],
  ): void {
    this.capacityEntries = this.baseCapacityEntries.filter(
      (entry) =>
        selectedFacilities
          .map((facility) => facility.id)
          .includes(entry.facilityId) &&
        selectedCapacityEntryTypes.includes(entry.capacityEntryType) &&
        (!selectedDateRange ||
          (entry.startDate >= selectedDateRange[0] &&
            entry.endDate <= selectedDateRange[1])),
    );
  }
}
