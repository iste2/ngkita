export enum DemandTypeStatus {
  Ok = 1,
  Error = 2,
  Warning = 3,
}

export interface FacilityEntry {
  facilityId: string;
  facilityName: string;
  numberOfKibizGroups: number;
  specialistStatus: DemandTypeStatus;
  assistantStatus: DemandTypeStatus;
  managerStatus: DemandTypeStatus;
  supportStatus: DemandTypeStatus;
  numberEmployeeSuggestions: number;
}
