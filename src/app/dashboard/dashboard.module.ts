import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AuthGuardService } from '../shared/security/auth-guard.service';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: DashboardComponent,
    //canActivate: [AuthGuardService]
  },
  {
    path: 'student',
    title: 'Student Dashboard',
    component: StudentDashboardComponent,
   // canActivate: [AuthGuardService]
  },
  {
    path: 'teacher',
    title: 'Teacher Dashboard',
    component: TeacherDashboardComponent,
    //canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
    NgChartsModule,
    NgCircleProgressModule.forRoot(),
  ]
})
export class DashboardModule { }
