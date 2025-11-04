import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EChartsComponent } from './e-charts/e-charts.component';




const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chartjs',
        title: 'Adminor - chartjs',
        component: ChartjsComponent,
      },
      {
        path: 'e-charts',
        title: 'Adminor - e-charts',
        component: EChartsComponent,
      },
      {
        path: 'apex-charts',
        title: 'Adminor - Apex charts',
        component: ApexchartsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
