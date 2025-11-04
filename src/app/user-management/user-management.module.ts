import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxEditorModule } from 'ngx-editor';
import { SharedModule } from '../shared/shared.module';
import { PermissionComponent } from './permission/permission.component';
import { RoleComponent } from './role/role.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserComponent } from './user/user.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RoleDepartmentComponent } from './role-department/role-department.component';
import { JobPermissionComponent } from './job-permission/job-permission.component';

@NgModule({
  declarations: [
    PermissionComponent,
    RoleComponent,
    UserComponent,
    JobPermissionComponent,
    RoleDepartmentComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule,
    //NgxColorsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    //Ng2TelInputModule,
    NgSelectModule,
    MatStepperModule,
    MatFormFieldModule,
    //ArchwizardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    //AngularEditorModule,
    //NgxDropzoneModule,
    NgxEditorModule,
  ]
})
export class UserManagementModule { }
