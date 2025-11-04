import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class AreaService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  get(pageNo:any,pageSize:any,searchText:string,branchId:any): Observable<any> {
    return this.http.get(`master/area?pageNo=${pageNo}&pageSize=${pageSize}&branchId=${branchId}&searchText=${searchText}`);
    }
  getAreaByZoneId(zoneId:any,branchId:any): Observable<any> {
    return this.http.get(`master/area/by-zone?zoneId=${zoneId}&branchId=${branchId}`);
    }
  delete(id: string): Observable<any> {
    return this.http.delete(`master/area/delete/${id}`);
  }
  active(id: string): Observable<any> {
    return this.http.get(`master/area/active/${id}`);
  }
  saveUpdate(formValues: any): Observable<any> {
    return this.http.post(`master/area`, formValues);
  }
}