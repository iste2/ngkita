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
import { DemandType } from '../../../shared/DataModels';
import { demandTypeName } from './DemandType';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-meetingneeds',
  templateUrl: './meetingneeds.component.html',
  styleUrl: './meetingneeds.component.scss',
})
export class MeetingneedsComponent implements OnInit {
  capacityEntries: CapacityEntry[] = [];
  chartData: ChartData | undefined;
  chartOptions: ChartOptions | undefined;

  constructor(
    public meetingneedsService: MeetingneedsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.capacityEntries = this.meetingneedsService.baseCapacityEntries;

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['facilities']) {
        this.selectedFacilities = params['facilities']
          .split(',')
          .map((id: string) => {
            return this.meetingneedsService.facilities.find(
              (facility) => facility.id === id,
            )!;
          });
      }
      if (params['dateRange']) {
        this.selectedDateRange = params['dateRange']
          .split('-')
          .map((date: string) => moment(date, 'DD.MM.YYYY').toDate());
      }
      if (params['capacityEntryTypes']) {
        this.selectedCapacityEntryTypes = params['capacityEntryTypes']
          .split(',')
          .map((type: string) => parseInt(type));
      }
      if (params['demandTypes']) {
        this.selectedDemandTypes = params['demandTypes']
          .split(',')
          .map((type: string) => parseInt(type));
      }

      this.updateCapacityEntries();
      this.updateChart();
    });
  }

  protected readonly capacityEntryTypeDisplayValue =
    capacityEntryTypeDisplayValue;
  protected readonly capacityEntryTypeColor = capacityEntryTypeColor;
  selectedFacilities: Facility[] = [];
  selectedDateRange: Date[] | undefined = [];
  selectedCapacityEntryTypes: CapacityEntryType[] = [];
  selectedDemandTypes: DemandType[] = [];

  protected async applyFilter(): Promise<void> {
    const params = {
      facilities: this.selectedFacilities
        .map((facility) => facility.id)
        .join(','),
      dateRange: this.selectedDateRange
        ? this.selectedDateRange
            .map((date) => moment(date).format('DD.MM.YYYY'))
            .join('-')
        : undefined,
      capacityEntryTypes: this.selectedCapacityEntryTypes.join(','),
      demandTypes: this.selectedDemandTypes.join(','),
    };

    await this.router.navigate(['/meetingneedsdetails'], {
      queryParams: params,
    });
  }

  protected updateCapacityEntries(): void {
    this.meetingneedsService.updateCapacityEntries(
      this.selectedFacilities,
      this.selectedDateRange,
      this.selectedCapacityEntryTypes,
      this.selectedDemandTypes,
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

  protected readonly demandTypeName = demandTypeName;
}
