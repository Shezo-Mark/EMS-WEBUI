import { Component, ViewChild } from '@angular/core';

import * as chartdata from 'src/app/shared/data/dashboard';


@Component({
  selector: 'app-dashboard-four',
  templateUrl: './dashboard-four.component.html',
  styleUrls: ['./dashboard-four.component.scss'],
})
export class DashboardFourComponent {
  public ApexChartData2 = chartdata.ApexChartData2;
}
