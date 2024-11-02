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
import { Facility } from './Facility';

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
    this.capacityEntries = this.meetingneedsService.baseCapacityEntries;
    this.selectedCapacityEntryTypes = [
      CapacityEntryType.Job,
      CapacityEntryType.EmployeeSuggestion,
      CapacityEntryType.EmployeeHasJob,
      CapacityEntryType.Demand,
    ];
    this.updateCapacityEntries();
    this.updateChart();
  }

  protected readonly capacityEntryTypeDisplayValue =
    capacityEntryTypeDisplayValue;
  protected readonly capacityEntryTypeColor = capacityEntryTypeColor;
  selectedFacilities: Facility[] = [];
  selectedDateRange: Date[] | undefined = [];
  selectedCapacityEntryTypes: CapacityEntryType[] = [];

  protected applyFilter(): void {
    this.updateCapacityEntries();
    this.updateChart();
  }

  protected updateCapacityEntries(): void {
    this.meetingneedsService.updateCapacityEntries(
      this.selectedFacilities,
      this.selectedDateRange,
      this.selectedCapacityEntryTypes,
    );
    this.capacityEntries = this.meetingneedsService.capacityEntries;
  }

  private updateChart(): void {
    let labels: Date[] = [];
    if (this.selectedDateRange) {
      labels = allDaysBetween(
        this.selectedDateRange[0],
        this.selectedDateRange[1],
      );
    } else {
      labels = allDaysBetween(
        earliestDate(this.capacityEntries.map((entry) => entry.startDate)),
        latestDate(this.capacityEntries.map((entry) => entry.endDate)),
      );
    }

    const datasets: any[] = [];
    this.selectedCapacityEntryTypes.forEach((capacityEntryType) => {
      datasets.push({
        label: capacityEntryTypeDisplayValue(capacityEntryType),
        type: 'line',
        data: labels.map((date) =>
          this.capacityEntries
            .filter(
              (entry) =>
                entry.startDate <= date &&
                entry.endDate >= date &&
                entry.capacityEntryType === capacityEntryType,
            )
            .reduce((sum, entry) => sum + entry.capacityHoursPerWeek, 0),
        ),
        stepped: true,
        fill:
          capacityEntryType === CapacityEntryType.EmployeeHasJob ||
          capacityEntryType === CapacityEntryType.EmployeeSuggestion,
        stack:
          capacityEntryType === CapacityEntryType.EmployeeHasJob ||
          capacityEntryType === CapacityEntryType.EmployeeSuggestion
            ? 'stack1'
            : undefined,
        pointStyle: false,
        borderColor: capacityEntryTypeColors[capacityEntryType],
        backgroundColor: capacityEntryTypeColors[capacityEntryType],
      });
    });

    this.chartData = {
      labels: labels,
      datasets: datasets,
    };

    this.chartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
        x: {
          type: 'time',
          grid: {
            display: false,
          },
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
        legend: {
          display: false,
        },
      },
    };
  }
}
