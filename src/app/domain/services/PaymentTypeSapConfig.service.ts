import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class PaymentTypeSapConfigService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  get(pageNo:any,pageSize:any,searchText:string): Observable<any> {
    return this.http.get(`master/sap-config?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchText}`);
    }
  saveUpdate(formValues: any): Observable<any> {
    return this.http.post(`master/sap-config`, formValues);
  }
}