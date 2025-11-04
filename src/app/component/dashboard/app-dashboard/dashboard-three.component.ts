import { Component, ElementRef, ViewChild } from '@angular/core';
import * as chartData from 'src/app/shared/data/dashboard';
import * as chartdata from 'src/app/shared/data/apex';

@Component({
  selector: 'app-dashboard-three',
  templateUrl: './dashboard-three.component.html',
  styleUrls: ['./dashboard-three.component.scss'],
})
export class DashboardThreeComponent {
  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;

  //Area Chart
  public AreaChartOptions = chartData.AreaChartOptions;
  public AreaChartType = chartData.AreaChartType;
  public AreaChartData = chartData.AreaChartData;

  public BarData = chartdata.BarData;
  public StackedBarData1 = chartData.StackedBarData1;
}

