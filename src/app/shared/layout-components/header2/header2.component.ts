import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LayoutService } from '../../services/layout.service';
import { Menu, NavService } from 'src/app/shared/services/nav.service';
import { SwitcherService } from 'src/app/shared/services/switcher.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss'],
})
export class Header2Component implements OnInit {
  public isCollapsed = true;

  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
    public modalService: NgbModal,
    public SwitcherService: SwitcherService,
    public router: Router
  ) {
   
  }

  ngOnInit(): void {
 
  }

  toggleSidebar() {
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('body')?.classList.toggle('sidenav-toggled');
    }
  }

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
    document.querySelector('body')?.classList.remove('sidenav-toggled-open');
  }

  
}
