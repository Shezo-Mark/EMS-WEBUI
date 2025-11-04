import { Component, ElementRef, ViewChild } from '@angular/core';
import * as chartData from 'src/app/shared/data/dashboard';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;
  
  //Area Chart
  public AreaChartOptions = chartData.AreaChartOptions;
  public AreaChartType = chartData.AreaChartType;
  public AreaChartData = chartData.AreaChartData;
}
