import { DateRangeCapacityOwner } from '../../../shared/DataModels';

export enum CapacityEntryType {
  Job,
  EmployeeSuggestion,
  EmployeeHasJob,
  Demand,
}

export const capacityEntryTypeColors = {
  [CapacityEntryType.Job]: '#2196F3',
  [CapacityEntryType.EmployeeSuggestion]: '#FF9800',
  [CapacityEntryType.EmployeeHasJob]: '#43A047',
  [CapacityEntryType.Demand]: '#E53935',
};

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
