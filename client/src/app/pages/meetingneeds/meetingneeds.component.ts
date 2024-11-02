import { Component, OnInit } from '@angular/core';
import { MeetingneedsService } from './meetingneeds.service';
import 'chartjs-adapter-luxon';
import {
  CapacityEntry,
  CapacityEntryType,
  capacityEntryTypeDisplayValue,
} from './CapacityEntry';
import {
  allDaysBetween,
  earliestDate,
  latestDate,
} from '../../../shared/dateUtils';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-meetingneeds',
  templateUrl: './meetingneeds.component.html',
  styleUrl: './meetingneeds.component.scss',
})
export class MeetingneedsComponent implements OnInit {
  capacityEntries: CapacityEntry[] = [];
  capacityEntryTypes: string[] = [];
  chartData: ChartData | undefined;
  chartOptions: ChartOptions | undefined;

  constructor(public meetingneedsService: MeetingneedsService) {}

  ngOnInit(): void {
    this.capacityEntryTypes = [
      capacityEntryTypeDisplayValue(CapacityEntryType.Job),
      capacityEntryTypeDisplayValue(CapacityEntryType.EmployeeSuggestion),
      capacityEntryTypeDisplayValue(CapacityEntryType.EmployeeHasJob),
      capacityEntryTypeDisplayValue(CapacityEntryType.Demand),
    ];
    this.capacityEntries = this.meetingneedsService.capacityEntries;

    this.chartData = {
      labels: allDaysBetween(
        earliestDate(this.capacityEntries.map((entry) => entry.startDate)),
        latestDate(this.capacityEntries.map((entry) => entry.endDate)),
      ),
      datasets: [
        {
          label: 'Bedarf',
          type: 'line',
          data: allDaysBetween(
            earliestDate(this.capacityEntries.map((entry) => entry.startDate)),
            latestDate(this.capacityEntries.map((entry) => entry.endDate)),
          ).map((date) =>
            this.capacityEntries
              .filter(
                (entry) =>
                  entry.startDate <= date &&
                  entry.endDate >= date &&
                  entry.capacityEntryType === CapacityEntryType.Demand,
              )
              .reduce((sum, entry) => sum + entry.capacityHoursPerWeek, 0),
          ),
          stepped: true,
          fill: false,
          pointStyle: false,
          borderColor: 'rgba(33, 33, 33, 1)',
        },
        {
          label: 'Stellen',
          type: 'line',
          data: allDaysBetween(
            earliestDate(this.capacityEntries.map((entry) => entry.startDate)),
            latestDate(this.capacityEntries.map((entry) => entry.endDate)),
          ).map((date) =>
            this.capacityEntries
              .filter(
                (entry) =>
                  entry.startDate <= date &&
                  entry.endDate >= date &&
                  entry.capacityEntryType === CapacityEntryType.Job,
              )
              .reduce((sum, entry) => sum + entry.capacityHoursPerWeek, 0),
          ),
          stepped: true,
          fill: false,
          pointStyle: false,
          borderColor: 'rgba(33, 150, 243, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.1)',
        },
        {
          label: 'Besetzte Stellen',
          type: 'line',
          data: allDaysBetween(
            earliestDate(this.capacityEntries.map((entry) => entry.startDate)),
            latestDate(this.capacityEntries.map((entry) => entry.endDate)),
          ).map((date) =>
            this.capacityEntries
              .filter(
                (entry) =>
                  entry.startDate <= date &&
                  entry.endDate >= date &&
                  entry.capacityEntryType === CapacityEntryType.EmployeeHasJob,
              )
              .reduce((sum, entry) => sum + entry.capacityHoursPerWeek, 0),
          ),
          stepped: true,
          fill: true,
          stack: 'stack1',
          pointStyle: false,
          borderColor: 'rgba(76, 175, 80, 1)',
          backgroundColor: 'rgba(76, 175, 80, 1)',
        },
        {
          label: 'Vorschläge',
          type: 'line',
          data: allDaysBetween(
            earliestDate(this.capacityEntries.map((entry) => entry.startDate)),
            latestDate(this.capacityEntries.map((entry) => entry.endDate)),
          ).map((date) =>
            this.capacityEntries
              .filter(
                (entry) =>
                  entry.startDate <= date &&
                  entry.endDate >= date &&
                  entry.capacityEntryType ===
                    CapacityEntryType.EmployeeSuggestion,
              )
              .reduce((sum, entry) => sum + entry.capacityHoursPerWeek, 0),
          ),
          stepped: true,
          fill: true,
          stack: 'stack1',
          pointStyle: false,
          borderColor: 'rgba(255, 152, 0, 1)',
          backgroundColor: 'rgba(255, 152, 0, 1)',
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          type: 'time',
        },
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },
      plugins: {
        tooltip: {
          callbacks: {
            title: (ctx) => {
              return ctx[0].label.replace(', 00:00:00', '');
            },
          },
        },
      },
    };
  }

  loadCapacityEntries() {
    this.capacityEntries = this.meetingneedsService.capacityEntries;
  }

  protected readonly capacityEntryTypeDisplayValue =
    capacityEntryTypeDisplayValue;
}
