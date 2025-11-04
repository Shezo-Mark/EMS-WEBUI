import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

import { DepartmentComponent } from './department/department.component';
import { FunctionComponent } from './function/function.component';
import { GroupComponent } from './group/group.component';
import { LevelComponent } from './level/level.component';
import { PostHostComponent } from './posthost/posthost.component';
import { MasterDataRoutingModule } from './master-data-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    DepartmentComponent,
    FunctionComponent,
    GroupComponent,
    LevelComponent,
    PostHostComponent,
  ],
  imports: [
    CommonModule,
    MasterDataRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
     NgxEditorModule,
  ]
})
export class MasterDataModule { }
