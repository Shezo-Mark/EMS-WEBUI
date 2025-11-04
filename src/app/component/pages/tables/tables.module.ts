import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { SharedModule } from "src/app/shared/shared.module";
//material Tables
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddRemoveDataComponent } from './data_table_component/add-remove-data/add-remove-data.component';
import { BasicAngularTableComponent } from './data_table_component/basic-angular-table/basic-angular-table.component';
import { NgbTableComponent } from './data_table_component/ngb-table/ngb-table.component';
import { SelectionTableComponent } from './data_table_component/selection-table/selection-table.component';
import { SortingFilterPeginationTableComponent } from './data_table_component/sorting-filter-pegination-table/sorting-filter-pegination-table.component';
import { StickyheaderComponent } from './data_table_component/stickyheader/stickyheader.component';



@NgModule({
  declarations: [BasicTableComponent, DataTablesComponent, EditTableComponent, AddRemoveDataComponent, BasicAngularTableComponent, NgbTableComponent, SelectionTableComponent, SortingFilterPeginationTableComponent, StickyheaderComponent],
  imports: [
      CommonModule,
      FormsModule,
    ReactiveFormsModule,
      NgbModule,
    TablesRoutingModule,
    SharedModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    NgSelectModule,
  ],
})
export class TablesModule {}
