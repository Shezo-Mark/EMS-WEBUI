import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-element-card-header',
  templateUrl: './element-card-header.component.html',
  styleUrls: ['./element-card-header.component.scss'],
})
export class ElementCardHeaderComponent {
  @Input() title!: string;
  @Input() item!: any;
  @Input() item1!: any;

  getitem1 = this.item1;
}
