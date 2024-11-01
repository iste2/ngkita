export interface DateRangeOwner {
  startDate: Date;
  endDate: Date;
}

export interface CapacityOwner {
  capacityHoursPerWeek: number;
}

export interface DateRangeCapacityOwner extends DateRangeOwner, CapacityOwner {}

export interface IBaseData {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface IContact {
  phone: string;
  email: string;
}

export interface Facility extends IAddress, IContact {
  jobs: Job[];
  employeeSuggestions: EmployeeSuggestion[];
}

export interface Employee extends IBaseData, IAddress, IContact {
  contracts: Contract[];
  employeeSuggestions: EmployeeSuggestion[];
  employeeHasJobs: EmployeeHasJob[];
}

export interface Contract extends DateRangeCapacityOwner {
  employee: Employee;
}

export interface Job extends DateRangeCapacityOwner {
  facility: Facility;
  employeeHasJobs: EmployeeHasJob[];
}

export interface EmployeeSuggestion extends DateRangeCapacityOwner {
  employee: Employee;
  facility: Facility;
}

export interface EmployeeHasJob extends DateRangeCapacityOwner {
  employee: Employee;
  job: Job;
}
