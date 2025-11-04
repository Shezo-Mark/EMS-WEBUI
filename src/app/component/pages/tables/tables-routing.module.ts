import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DataTablesComponent } from './data-tables/data-tables.component'; 
import { EditTableComponent } from './edit-table/edit-table.component';


const routes: Routes = [
  {
    path: 'tables',
    children: [
      {
        path: 'basic-table',
        component: BasicTableComponent,
        title: 'Adminor - Basictables',
      },
      {
        path: 'data-tables',
        component: DataTablesComponent,
        title: 'Adminor - Datatables',
      },
      {
        path: 'edit-tables',
        component: EditTableComponent,
        title: 'Adminor - Edittables',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {




 }
