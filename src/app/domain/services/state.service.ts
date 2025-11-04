import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _isJDOpenedFromCompany = false;

  constructor() { }

  setSelectedCompany(company:any) {
    return localStorage.setItem('companyId', company.onboardingId);
    }

  getSelectedCompany() {
    return localStorage.getItem('companyId');
    }

   setOpenedFromCompany(val=false) {
    this._isJDOpenedFromCompany = val;
    }

   getOpenedFromCompany() {
    return this._isJDOpenedFromCompany;
    }

}
