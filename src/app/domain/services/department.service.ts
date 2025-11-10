import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  baseUrl: any;

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  get(pageNo:any,pageSize:any,searchText:string): Observable<any> {
    return this.http.get(`master/department/department-list?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchText}`);
    }
softDelete(id: any) {
  return this.http.post(`master/department/Delete/${id}`, {});
}

activate(id: any) {
  return this.http.post(`master/department/Activate/${id}`, {});
}



  getall(): Observable<any> {
    return this.http.get(`master/department`);
    }
  getdepartmentsbyGroupId(GroupId:string): Observable<any> {
    return this.http.get(`master/department/department-by-groupid?GroupId=`+GroupId);
    }
  delete(id: string): Observable<any> {
    return this.http.delete(`master/department/delete/${id}`);
  }
  active(id: string): Observable<any> {
    return this.http.get(`master/department/active/${id}`);
  }
  saveUpdate(formValues: any): Observable<any> {
    return this.http.post(`master/department`, formValues);
  }
}