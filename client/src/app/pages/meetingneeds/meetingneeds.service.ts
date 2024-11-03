import { Injectable } from '@angular/core';
import { CapacityEntry, CapacityEntryType } from './CapacityEntry';
import { Facility } from './Facility';
import { dateRangeOverlaps } from '../../../shared/dateUtils';
import { DemandType } from '../../../shared/DataModels';

@Injectable({
  providedIn: 'root',
})
export class MeetingneedsService {
  capacityEntryTypes: CapacityEntryType[] = [
    CapacityEntryType.Demand,
    CapacityEntryType.Job,
    CapacityEntryType.EmployeeHasJob,
    CapacityEntryType.EmployeeSuggestion,
  ];
  demandTypes: DemandType[] = [
    DemandType.Specialist,
    DemandType.Assistant,
    DemandType.Manager,
    DemandType.Support,
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
      name: 'Erzieher',
      facilityId: '1',
      show: true,
      capacityEntryType: CapacityEntryType.Job,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 60,
      demandType: DemandType.Specialist,
    },
    {
      id: '56',
      name: 'Manfred, Powerman',
      facilityId: '1',
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeHasJob,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 7, 31),
      capacityHoursPerWeek: 15,
      demandType: DemandType.Specialist,
    },
    {
      id: '33',
      name: 'Wolfgang, Powerman',
      facilityId: '1',
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeSuggestion,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 10,
      demandType: DemandType.Specialist,
    },
    {
      id: '52',
      name: 'Ulrich, Megaman',
      facilityId: '1',
      show: true,
      capacityEntryType: CapacityEntryType.EmployeeHasJob,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 15,
      demandType: DemandType.Specialist,
    },
    {
      id: '41',
      name: 'KiTa-Bedarfsplan',
      facilityId: '1',
      show: true,
      capacityEntryType: CapacityEntryType.Demand,
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 80,
      demandType: DemandType.Specialist,
    },
    {
      id: '42',
      name: 'KiTa-Bedarfsplan',
      facilityId: '1',
      show: true,
      capacityEntryType: CapacityEntryType.Demand,
      startDate: new Date(2024, 5, 1),
      endDate: new Date(2024, 11, 31),
      capacityHoursPerWeek: 80,
      demandType: DemandType.Manager,
    },
  ];

  updateCapacityEntries(
    selectedFacilities: Facility[],
    selectedDateRange: Date[] | undefined,
    selectedCapacityEntryTypes: CapacityEntryType[],
    selectedDemandTypes: DemandType[],
  ): void {
    this.capacityEntries = this.baseCapacityEntries.filter(
      (entry) =>
        selectedFacilities
          .map((facility) => facility.id)
          .includes(entry.facilityId) &&
        selectedCapacityEntryTypes.includes(entry.capacityEntryType) &&
        (!selectedDateRange ||
          dateRangeOverlaps(
            selectedDateRange[0],
            selectedDateRange[1],
            entry.startDate,
            entry.endDate,
          )) &&
        selectedDemandTypes.includes(entry.demandType),
    );
  }
}
