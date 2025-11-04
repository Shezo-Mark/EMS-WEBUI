import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardFiveComponent } from './analytics-dashboard/dashboard-five.component';
import { DashboardFourComponent } from './lms-dashboard/dashboard-four.component';
import { DashboardOneComponent } from './sales-dashboard/dashboard-one.component';
import { DashboardThreeComponent } from './app-dashboard/dashboard-three.component';
import { DashboardTwoComponent } from './marketing-dashboard/dashboard-two.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sales-dashboard',
        title: 'LMS - dashboard',
        component: DashboardOneComponent,
      },
      // {
      //   path: 'marketing-dashboard',
      //   title: 'Adminor - marketing-dashboard',
      //   component: DashboardTwoComponent,
      // },
      // {
      //   path: 'app-dashboard',
      //   title: 'Adminor - app-dashboard',
      //   component: DashboardThreeComponent,
      // },
      // {
      //   path: 'lms-dashboard',
      //   title: 'Adminor - lms-dashboard',
      //   component: DashboardFourComponent,
      // },
      // {
      //   path: 'analytics-dashboard',
      //   title: 'Adminor - analytics-dashboard',
      //   component: DashboardFiveComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
