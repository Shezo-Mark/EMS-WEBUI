import { Component, AfterViewInit ,OnInit, ElementRef, ViewChild } from '@angular/core';
import * as chartData from 'src/app/shared/data/chartjs';
import * as Chart from 'chart.js';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};


@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
})
export class ChartjsComponent implements OnInit {
  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Series Blue',
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: 'Series Green',
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: 'Series Orange',
          data: [44, 76, 78, 13, 43, 10],
        },
      ],
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: 'Radar Chart - Multi Series',
      },
      stroke: {
        width: 0,
      },
      fill: {
        opacity: 0.4,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
      },
    };
  }

  ngOnInit(): void {}

  //Line Chart
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;

  //Doughnut and Pie Chart Data
  public PieChartData = chartData.PieChartData;
  public PieChartOptions = chartData.PieChartOptions;
  public PieChartType = chartData.PieChartType;
  public DoughnutChartType = chartData.DoughnutChartType;

  //Bar Chart (Vertical)
  public barChart2Options = chartData.barChart2Options;
  public barChart2Type = chartData.barChart2Type;
  public barChart2Legend = chartData.barChart2Legend;
  public barChart2Data = chartData.barChart2Data;

  // Solid Color
  public solidColorOptions = chartData.solidColorChartOptions;
  public solidColorType = chartData.solidColorChartType;
  public solidColorData = chartData.solidColorChartData;
  public solidColorLegend = chartData.solidColorLegend;
  // Solid Color
  public solidColorOptions1 = chartData.solidColorChartOptions1;
  public solidColorType1 = chartData.solidColorChartType1;
  public solidColorData1 = chartData.solidColorChartData1;
  public solidColorLegend1 = chartData.solidColorLegend1;

  //polar
  public polarAreaChartLabels = chartData.polarAreaChartLabels;
  public polarAreaChartData = chartData.polarAreaChartData;
  public polarAreaLegend = chartData.polarAreaLegend;
  public polarChartOptions = chartData.polarChartOptions;
  public polarAreaChartType = chartData.polarAreaChartType;

  //Area Chart
  public AreaChartOptions = chartData.AreaChartOptions;
  public AreaChartType = chartData.AreaChartType;
  public AreaChartData = chartData.AreaChartData;

  // //Radar Chart
  public radarChartData = chartData.radarChartData;
  public radarChartOptions = chartData.radarChartOptions;
  public radarChartType = chartData.radarChartType;
}
