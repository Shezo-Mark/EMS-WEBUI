import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, HostListener } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { Menu, NavService } from '../../services/nav.service';
import { checkHoriMenu, switcherArrowFn } from './sidebar';
import { AuthService } from '../../security/auth-service.service';
import { StateService } from 'src/app/domain/services/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public menuItems!: Menu[];
  public url: any;
  permisssion: any;
  permisssionArray: any[] = [];
  public windowSubscribe$!: any;
  userDetails: any
  loginUserName:string = '';
  loginRoleName:string = '';
  constructor(
    public elRef: ElementRef,
    private _authService: AuthService,
    private authService: AuthService,
    private router: Router,
    private stateService: StateService
  ) {
    // this.userDetails = this.authService.getUserDetails();
    // this.loginRoleName = this.userDetails.user.roleName;
    // this.loginUserName = this.userDetails.user.fullName;;
    // this.permisssion = this._authService.getPermissions().filter((x: { isMenuItem: boolean; }) => x.isMenuItem == true).sort( (a:any,b:any) => a.sortOrder - b.sortOrder );
    // this.permisssionArray = this.buildHierarchy(this.permisssion);
  }
  buildHierarchy(items: any) {
    let parents = items.filter((x: { parentId: null; }) => x.parentId == null)
    let result: any[] = [];
    for (let index = 0; index < parents.length; index++) {
      result.push({ ...parents[index], children: [] });
      let child = items.filter((x: { parentId: any; }) => x.parentId == parents[index].permissionItemId).sort((a:any,b:any) => (a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? 1 : 0));;
      if (child.length > 0)
        result[index].children.push(...child);
    }

    return result;
  }

  selectedItem: string | null = null;

  toggleSlide(item: string): void {
    this.selectedItem = this.selectedItem === item ? null : item;
  }
  // Toggle menu
  toggleNavActive(item: any) {
    if (!item.active) {
      this.menuItems.forEach((a: any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
          if (!b.children) {
            return false;
          }
          b.children.forEach((c: any) => {
            if (b.children.includes(item)) {
              c.active = false;
            }
            if (!c.children) {
              return false;
            }
            return;
          });
          return;
        });
        return;
      });
    }
    item.active = !item.active;
  }
  ngOnInit(): void {
  }
  scrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 64;
  }

  openJobDescription(){
    this.stateService.setOpenedFromCompany(false);
     this.stateService.setSelectedCompany('');
    this.router.navigate(['/job-description/jd'])
  }
}
