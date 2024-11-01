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
  CapacityEntryType: CapacityEntryType;
}
