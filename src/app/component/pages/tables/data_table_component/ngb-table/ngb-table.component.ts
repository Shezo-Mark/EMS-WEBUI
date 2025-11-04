import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NgbdSortableHeader,
  SortEvent,
} from 'src/app/shared/directive/soratable.directive';
import { Country } from 'src/app/component/pages/tables/table-modal/countreies.modal';
import { CountryService } from 'src/app/component/pages/tables/table-services/counteries.service';

@Component({
  selector: 'app-ngb-table',
  templateUrl: './ngb-table.component.html',
  styleUrls: ['./ngb-table.component.scss'],
})
export class NgbTableComponent {
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent | any) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
