import { Component, ElementRef, ViewChild } from '@angular/core';
import * as chartData from 'src/app/shared/data/dashboard';


@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.scss'],
})
export class DashboardOneComponent {
  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;
  
  //Area Chart
  public AreaChartOptions = chartData.AreaChartOptions;
  public AreaChartType = chartData.AreaChartType;
  public AreaChartData = chartData.AreaChartData;
}
