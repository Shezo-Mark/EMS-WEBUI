import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class ZoneService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  get(pageNo:any,pageSize:any,searchText:string,branchId:any): Observable<any> {
    return this.http.get(`master/zone?pageNo=${pageNo}&pageSize=${pageSize}&branchId=${branchId}&searchText=${searchText}`);
    }
  getall(branchId:any): Observable<any> {
    return this.http.get(`master/zone/get-zones?branchId=${branchId}`);
    }
  delete(id: string): Observable<any> {
    return this.http.delete(`master/zone/delete/${id}`);
  }
  active(id: string): Observable<any> {
    return this.http.get(`master/zone/active/${id}`);
  }
  saveUpdate(formValues: any): Observable<any> {
    return this.http.post(`master/zone`, formValues);
  }
}