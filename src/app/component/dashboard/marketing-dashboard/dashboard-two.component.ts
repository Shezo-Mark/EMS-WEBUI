import { Component } from '@angular/core';
import * as chartData from 'src/app/shared/data/dashboard';


@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html',
  styleUrls: ['./dashboard-two.component.scss'],
})
export class DashboardTwoComponent {
  public StackedBarData = chartData.StackedBarData;
  public radicalmultipleData = chartData.RadialBarCircleMultipleData;
}
