import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class OnboardingService {

  constructor(private http: HttpRequestService) {
  }
  save(onboarding:any): Observable<any> {
    return this.http.post(`onboarding`,onboarding);
  }
   delete(onboardingId: string, ): Observable<any> {
      const params = new HttpParams()
      .set('onboardingId', onboardingId)

      return this.http.deleteWithParams(`onboarding`,  params);
    }


  getOnboardings(pageNo:string,pageSize:string,searchText:string): Observable<any> {
    return this.http.get(`onboarding/get-onboardings?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchText}`);
  }

  getOnboardingById(onboardingId: string): Observable<any> {
    return this.http.get('onboarding/get-onboarding-byId?onboardingId='+onboardingId);
  }
  active(id:any): Observable<any> {
    return this.http.get(`onboarding/active?onboardingId=`+id);
    }
    getClientCode(): Observable<any> {
    return this.http.get('onboarding/get-clientcode');
  }
    saveUpdate(formValues: any): Observable<any> {
    debugger;
    console.log(formValues);
    return this.http.post(`onboarding/post-onboarding`, formValues);
  }
  getAll(): Observable<any> {
    return this.http.get(`onboarding/get-all`);
    }


}
