import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { PermissionComponent } from './permission/permission.component';
import { AuthGuardService } from '../shared/security/auth-guard.service';
import { RoleDepartmentComponent } from './role-department/role-department.component';
import { JobPermissionComponent } from './job-permission/job-permission.component';

const routes: Routes = [
  {path: 'role',component: RoleComponent,
  //canActivate: [AuthGuardService]
},
  {path: 'user',component: UserComponent,
  //canActivate: [AuthGuardService]
},
  {path: 'permission',component: PermissionComponent},
  {path: 'role-department',component: RoleDepartmentComponent},
{path: 'permission',component: PermissionComponent},
{path: 'setting',component: JobPermissionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
