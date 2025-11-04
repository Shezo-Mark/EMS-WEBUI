import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PAGINATIONComponent {
  page = 3;
  page1 = 3;
  page2 = 3;
  page3 = 3;
  page4 = 3;
  page5 = 3;

  GetPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 2];
  }

  selectPage(page: string) {
    this.page = parseInt(page, 8) || 1;
  }
}
