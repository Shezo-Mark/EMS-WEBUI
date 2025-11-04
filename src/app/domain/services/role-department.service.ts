import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class RoleDepartmentService {

  constructor(private http: HttpRequestService) {}

  get(pageNo: number, pageSize: number, searchText: string = ""): Observable<any> {
    return this.http.get(`user-management/roledepartment/roledepartments-list?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchText}`);
  }

  add(data: any): Observable<any> {
    console.log(data)
    return this.http.post('user-management/roledepartment/add-roledepartment', data);
  }

  update(data: any): Observable<any> {
    return this.http.put('user-management/roledepartment/update-roledepartment', data);
  }

  // delete(departmentId: string, roleId: string): Observable<any> {
  //   return this.http.delete(`user-management/roledepartment/delete?departmentId=${departmentId}&roleId=${roleId}`);
  // }
  delete(departmentId: string, roleId: string): Observable<any> {
    const params = new HttpParams()
    .set('departmentId', departmentId)
    .set('roleId', roleId);
    return this.http.deleteWithParams(`user-management/roledepartment`,  params);
  }
  getRoles(): Observable<any> {
    return this.http.get(`user-management/role/get`);
  }

  getDepartments(): Observable<any> {
    return this.http.get(`master/department`);
  }

}
