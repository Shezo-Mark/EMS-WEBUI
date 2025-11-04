import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header2',
  templateUrl: './page-header2.component.html',
  styleUrls: ['./page-header2.component.scss'],
})
export class PageHeader2Component {
  
   @Input() title!: string;
  @Input() items!: any[];
  @Input() active_item!: string;
}
