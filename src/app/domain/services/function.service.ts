import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class FunctionService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  get(pageNo:any,pageSize:any,searchText:string): Observable<any> {
    return this.http.get(`master/function/function-list?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchText}`);
    }
  getall(): Observable<any> {
    return this.http.get(`master/function`);
    }
  getfunctionsbyGroupId(GroupId:string): Observable<any> {
    return this.http.get(`master/function/function-by-groupid?GroupId=`+GroupId);
    }
  delete(id: string): Observable<any> {
    return this.http.delete(`master/function/delete/${id}`);
  }
  active(id: string): Observable<any> {
    return this.http.get(`master/function/active/${id}`);
  }
  saveUpdate(formValues: any): Observable<any> {
    return this.http.post(`master/function`, formValues);
  }
}