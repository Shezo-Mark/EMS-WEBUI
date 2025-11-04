import { Component } from '@angular/core';
import * as chartData from 'src/app/shared/data/echart';

@Component({
  selector: 'app-e-charts',
  templateUrl: './e-charts.component.html',
  styleUrls: ['./e-charts.component.scss'],
})
export class EChartsComponent {

  public echartLineOption = chartData.echartLineOption;
  public echartLineBarOption = chartData.echartLineBarOption;
  public echartHorizontalLineChart = chartData.echartHorizontalLineChart;
  public echartHorizontalLineBarChart = chartData.echartHorizontalLineBarChart;
  public echartStackedBarChart = chartData.echartStackedBarChart;
  public echartHoriStackedBarChart = chartData.echartHoriStackedBarChart;
  public dataAttributes1 = chartData.dataAttributes1;
  public dataAttributes2 = chartData.dataAttributes2;
  public dataAttributes3 = chartData.dataAttributes3;
}
