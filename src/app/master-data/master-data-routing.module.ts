import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentComponent } from './department/department.component';
import { FunctionComponent } from './function/function.component';
import { GroupComponent } from './group/group.component';
import { LevelComponent } from './level/level.component';
import { PostHostComponent } from './posthost/posthost.component';

const routes: Routes = [
  {
    path: 'departments',
    component: DepartmentComponent,
   // canActivate: [AuthGuardService]
  },
  {
    path: 'functions',
    component: FunctionComponent,
   // canActivate: [AuthGuardService]
  },
  {
    path: 'groups',
    component: GroupComponent,
   // canActivate: [AuthGuardService]
  },
  {
    path: 'levels',
    component: LevelComponent,
   // canActivate: [AuthGuardService]
  },
  {
    path: 'posthosts',
    component: PostHostComponent,
   // canActivate: [AuthGuardService]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRoutingModule { }
