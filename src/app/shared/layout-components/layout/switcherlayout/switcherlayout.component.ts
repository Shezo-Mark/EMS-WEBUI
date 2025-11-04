import { Component } from '@angular/core';
import { SwitcherService } from 'src/app/shared/services/switcher.service';


@Component({
  selector: 'app-switcherlayout',
  templateUrl: './switcherlayout.component.html',
  styleUrls: ['./switcherlayout.component.scss'],
})
export class SwitcherlayoutComponent {
  constructor(public SwitcherService: SwitcherService) {}

  ngOnDestroy() {
    location.reload();
  }

  mainSidebarOpen: any;
  hoverEffect($event: any) {
    this.mainSidebarOpen =
      $event.type == 'mouseover' ? 'sidenav-toggled-open' : '';
  }
}
