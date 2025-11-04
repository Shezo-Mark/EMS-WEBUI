import { Component } from '@angular/core';
import * as chartData from 'src/app/shared/data/apex';

@Component({
  selector: 'app-apexcharts',
  templateUrl: './apexcharts.component.html',
  styleUrls: ['./apexcharts.component.scss'],
})
export class ApexchartsComponent {
  public RandomData = chartData.ApexRandomData;
  public BarData = chartData.BarData;
  public ApexChartData = chartData.ApexChartData;
  public StackedBarData = chartData.StackedBarData;
}
