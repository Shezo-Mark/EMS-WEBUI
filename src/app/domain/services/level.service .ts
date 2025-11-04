import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class LevelService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  get(pageNo:any,pageSize:any,searchText:string): Observable<any> {
    return this.http.get(`master/level/level-list?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchText}`);
    }
  getall(): Observable<any> {
    return this.http.get(`master/level`);
    }
  delete(id: string): Observable<any> {
    return this.http.delete(`master/level/delete/${id}`);
  }
  getlevelsbyGroupId(GroupId:string): Observable<any> {
    return this.http.get(`master/level/level-by-groupid?GroupId=`+GroupId);
    }
  getlevelsbyGroupCode(GroupCode:string=''): Observable<any> {
    return this.http.get(`master/level/level-by-groupcode?GroupCode=`+GroupCode);
    }
  active(id: string): Observable<any> {
    return this.http.get(`master/level/active/${id}`);
  }
  saveUpdate(formValues: any): Observable<any> {
    return this.http.post(`master/level`, formValues);
  }
}