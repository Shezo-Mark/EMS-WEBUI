import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  // standalone: true,
  // imports: [CommonModule],
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  
  @Input() title!: string;
  @Input() items!: any[];
  @Input() active_item!: string;
}
