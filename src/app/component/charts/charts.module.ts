import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';

import { ChartjsComponent } from './chartjs/chartjs.component';
import { EChartsComponent } from './e-charts/e-charts.component';
import { SharedModule } from "../../shared/shared.module";
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { NgChartjsModule } from 'ng-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';

 



@NgModule({
  declarations: [ChartjsComponent, EChartsComponent, ApexchartsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgChartsModule,
    NgChartjsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class ChartsModule {}
