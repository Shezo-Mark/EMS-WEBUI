import { Component, ElementRef, ViewChild } from '@angular/core';
import * as chartData from 'src/app/shared/data/dashboard';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent {
  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;
  
  //Area Chart
  public AreaChartOptions = chartData.AreaChartOptions;
  public AreaChartType = chartData.AreaChartType;
  public AreaChartData = chartData.AreaChartData;
}
