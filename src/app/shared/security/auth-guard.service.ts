import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, CanActivateChild, CanLoad, Route
} from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })

export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    if (!this.isAuthorized(url)) {
      this.router.navigate(['/auth/accessdenied']);
    }
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url: string = route.path as string;
    return true;
  }

  checkLogin(url: string): boolean {

    if (localStorage.getItem(environment.AuthToken) != null) { return true; }
    this.router.navigate(['auth/login']);
    return false;
  }

  isAuthorized(path: string) {
    let splittedPath = path.replace(/^\/+/, '').split('?');
    if (localStorage.getItem(environment.PermissionsModel) == null) {
      this.router.navigate(['auth/login']);
    }
    let permission = JSON.parse(localStorage.getItem(environment.PermissionsModel) || "{}")
    let rights = permission.filter((x: { isMenuItem: number; }) => x.isMenuItem == 1)
    return rights.find((x: { url: string; }) => x.url == splittedPath[0]) != undefined;
  }
}
