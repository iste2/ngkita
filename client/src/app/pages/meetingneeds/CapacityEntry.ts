import { DateRangeCapacityOwner, DemandType } from '../../../shared/DataModels';

export enum CapacityEntryType {
  Job = 1,
  EmployeeSuggestion = 2,
  EmployeeHasJob = 3,
  Demand = 4,
}

export const capacityEntryTypeColors = {
  [CapacityEntryType.Job]: '#2196F3',
  [CapacityEntryType.EmployeeSuggestion]: '#FF9800',
  [CapacityEntryType.EmployeeHasJob]: '#43A047',
  [CapacityEntryType.Demand]: '#E53935',
};

export function capacityEntryTypeColor(capacityEntryType: CapacityEntryType) {
  if (capacityEntryType === undefined) return '#000000';
  return capacityEntryTypeColors[capacityEntryType];
}

export interface CapacityEntry extends DateRangeCapacityOwner {
  id: string;
  name: string;
  facilityId: string;
  show: boolean;
  capacityEntryType: CapacityEntryType;
  demandType: DemandType;
}

export function capacityEntryTypeDisplayValue(
  capacityEntryType: CapacityEntryType,
): string {
  switch (capacityEntryType) {
    case CapacityEntryType.Job:
      return 'Stellen';
    case CapacityEntryType.EmployeeSuggestion:
      return 'Personalvorschläge';
    case CapacityEntryType.EmployeeHasJob:
      return 'Mitarbeiter';
    case CapacityEntryType.Demand:
      return 'Bedarfe';
    default:
      return 'Unknown';
  }
}
