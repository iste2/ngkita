import { Component, OnInit } from '@angular/core';
import { MeetingneedsService } from './meetingneeds.service';
import 'chartjs-adapter-luxon';
import {
  CapacityEntry,
  CapacityEntryType,
  capacityEntryTypeColor,
  capacityEntryTypeColors,
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
          borderColor: capacityEntryTypeColors[CapacityEntryType.Demand],
          backgroundColor: capacityEntryTypeColors[CapacityEntryType.Demand],
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
          borderColor: capacityEntryTypeColors[CapacityEntryType.Job],
          backgroundColor: capacityEntryTypeColors[CapacityEntryType.Job],
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
          borderColor:
            capacityEntryTypeColors[CapacityEntryType.EmployeeHasJob],
          backgroundColor:
            capacityEntryTypeColors[CapacityEntryType.EmployeeHasJob],
        },
        {
          label: 'Personalvorschläge',
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
          borderColor:
            capacityEntryTypeColors[CapacityEntryType.EmployeeSuggestion],
          backgroundColor:
            capacityEntryTypeColors[CapacityEntryType.EmployeeSuggestion],
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

  protected readonly capacityEntryTypeDisplayValue =
    capacityEntryTypeDisplayValue;
  protected readonly capacityEntryTypeColors = capacityEntryTypeColors;
  protected readonly capacityEntryTypeColor = capacityEntryTypeColor;
}
