import { DateRangeCapacityOwner } from '../../../shared/DataModels';

export enum CapacityEntryType {
  Job,
  EmployeeSuggestion,
  EmployeeHasJob,
  Demand,
}

export interface CapacityEntry extends DateRangeCapacityOwner {
  id: string;
  show: boolean;
  capacityEntryType: CapacityEntryType;
}

export function capacityEntryTypeDisplayValue(
  capacityEntryType: CapacityEntryType,
): string {
  switch (capacityEntryType) {
    case CapacityEntryType.Job:
      return 'Stelle';
    case CapacityEntryType.EmployeeSuggestion:
      return 'Vorschlag';
    case CapacityEntryType.EmployeeHasJob:
      return 'Mitarbeiter';
    case CapacityEntryType.Demand:
      return 'Bedarf';
    default:
      return 'Unknown';
  }
}
