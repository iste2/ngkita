import { Injectable } from '@angular/core';
import { Facility, KiBizGroup } from './DemandPlanningDomain';

@Injectable({
  providedIn: 'root',
})
export class DemandplanningService {
  facilities: Facility[] = [];
  kibizGroups: KiBizGroup[] = [];

  constructor() {
    this.facilities = [
      { id: '1', name: 'Springfield' },
      { id: '2', name: 'Shelbyville' },
      { id: '3', name: 'Ogdenville' },
      { id: '4', name: 'North Haverbrook' },
      { id: '5', name: 'Capital' },
    ];
    this.kibizGroups = [
      {
        id: '1',
        facility: this.facilities[0],
        size1A: 10,
        size1B: 20,
        size1C: 30,
        size2A: 40,
        size2B: 50,
        size2C: 60,
        size3A: 70,
        size3B: 80,
        size3C: 90,
        dateRange: [new Date(2024, 0, 1), new Date(2024, 11, 31)],
      },
      {
        id: '2',
        facility: this.facilities[0],
        size1A: 10,
        size1B: 20,
        size1C: 30,
        size2A: 40,
        size2B: 50,
        size2C: 60,
        size3A: 70,
        size3B: 80,
        size3C: 90,
        dateRange: [new Date(2024, 0, 1), new Date(2024, 11, 31)],
      },
      {
        id: '3',
        facility: this.facilities[0],
        size1A: 10,
        size1B: 20,
        size1C: 30,
        size2A: 40,
        size2B: 50,
        size2C: 60,
        size3A: 70,
        size3B: 80,
        size3C: 90,
        dateRange: [new Date(2024, 0, 1), new Date(2024, 11, 31)],
      },
      {
        id: '4',
        facility: this.facilities[0],
        size1A: 10,
        size1B: 20,
        size1C: 30,
        size2A: 40,
        size2B: 50,
        size2C: 60,
        size3A: 70,
        size3B: 80,
        size3C: 90,
        dateRange: [new Date(2024, 0, 1), new Date(2024, 11, 31)],
      },
    ];
  }
}
