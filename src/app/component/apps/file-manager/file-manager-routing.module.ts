import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FILEATTACHMENtsComponent } from './file-attachments/file-attachments.component';
import { FileManagerDetailsComponent } from './file-manager-details/file-manager-details.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';
import { FileManagerComponent } from './file-manager/file-manager.component';

const routes: Routes = [
  {
    path: 'file-manager',
    children: [
      {
        path: 'file-manager',
        title: 'Adminor - file-manager',
        component: FileManagerComponent,
      },
      {
        path: 'file-attachments',
        title: 'Adminor - file-attachments',
        component: FILEATTACHMENtsComponent,
      },
      {
        path: 'file-manager-details',
        title: 'Adminor - file-manager-details',
        component: FileManagerDetailsComponent,
      },
      {
        path: 'file-manager-list',
        title: 'Adminor - file-manager-list',
        component: FileManagerListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }
