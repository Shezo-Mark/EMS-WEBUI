import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class PostHostService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  get(pageNo:any,pageSize:any,searchText:string): Observable<any> {
    return this.http.get(`master/posthost/posthost-list?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchText}`);
    }
  getall(): Observable<any> {
    return this.http.get(`master/posthost`);
    }
  delete(id: string): Observable<any> {
    return this.http.delete(`master/posthost/delete/${id}`);
  }
  active(id: string): Observable<any> {
    return this.http.get(`master/posthost/active/${id}`);
  }
  saveUpdate(formValues: any): Observable<any> {
    return this.http.post(`master/posthost`, formValues);
  }
}