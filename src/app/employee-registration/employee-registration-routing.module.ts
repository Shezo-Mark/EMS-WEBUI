import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AceessriesComponent } from './aceessries/aceessries.component';
const routes: Routes = [
  {
    path: 'employee',
    title: 'Employee - Registration',
    component: RegistrationComponent,
  },
  {
    path: 'employee-list',
    title: 'Employee - List',
    component: EmployeeListComponent,
  },
  {
    path: 'employee-accessories',
    title: 'Employee - accessories',
    component: AceessriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRegistrationRoutingModule {}
