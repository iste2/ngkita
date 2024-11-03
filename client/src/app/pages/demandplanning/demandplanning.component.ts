import { Component, OnInit } from '@angular/core';
import { Facility, KiBizGroup } from './DemandPlanningDomain';
import { DemandplanningService } from './demandplanning.service';

@Component({
  selector: 'app-demandplanning',
  templateUrl: './demandplanning.component.html',
  styleUrl: './demandplanning.component.scss',
})
export class DemandplanningComponent implements OnInit {
  kibizGroups: KiBizGroup[] = [];
  facilities: Facility[] | undefined = [];

  constructor(public demandplanningService: DemandplanningService) {}

  ngOnInit(): void {
    this.kibizGroups = this.demandplanningService.kibizGroups;
    this.facilities = this.demandplanningService.facilities;
  }

  onRowEditSave(group: KiBizGroup) {
    console.log('Todo: Write group to database: ', group);
  }

  deleteGroup(group: KiBizGroup) {
    console.log('Todo: Delete group from database: ', group);
    const index = this.kibizGroups.indexOf(group);
    if (index > -1) {
      this.kibizGroups.splice(index, 1);
    }
  }

  addGroup() {
    this.kibizGroups.unshift({
      id: '',
      facility: this.facilities ? this.facilities[0] : undefined,
      size1A: 0,
      size1B: 0,
      size1C: 0,
      size2A: 0,
      size2B: 0,
      size2C: 0,
      size3A: 0,
      size3B: 0,
      size3C: 0,
      dateRange: [new Date(), new Date()],
    });
  }
}
