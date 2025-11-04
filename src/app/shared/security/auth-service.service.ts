import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private Loading = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  redirectUrl: string = "";
  
  constructor(private route: Router) {
  }

  get isLoading() {
    return this.Loading.asObservable(); // {2}
  }

  setLoading(v: boolean) {
    this.Loading.next(v); // {2}
  }

  getUserDetails() {
    if (localStorage.getItem('UserModel') != null) {
      return JSON.parse(atob(localStorage.getItem(environment.AuthToken) as string));
    }else return null
  }
  getBranchIdFromLoginUser() {
    if (localStorage.getItem(environment.BranchId) != null) {
      return JSON.parse(atob(localStorage.getItem(environment.BranchId) as string));
    }else return null
  }
  setCredntial(cred: any, rememberme: boolean) {
    localStorage.clear();
    let u: UserModel = (cred);
    localStorage.setItem(environment.AuthToken, btoa(JSON.stringify(u)));
    localStorage.setItem(environment.PermissionsModel, JSON.stringify(cred.permissions));
    this.loggedIn.next(true);
  }
  logout() {
    localStorage.removeItem(environment.AuthToken);
    localStorage.removeItem(environment.PermissionsModel);
    localStorage.removeItem(environment.BranchId);
    this.loggedIn.next(false);
    this.route.navigate(["auth/login"]);
  }
  isAuthenticated(): boolean {
    return this.getUserDetails().token !== null;
  }
  getPermissions() {
    if (this.isAuthenticated()) {
      let permissions  =  JSON.parse(localStorage.getItem(environment.PermissionsModel) as string);
      return permissions;
    }
    return null;
  }
}
