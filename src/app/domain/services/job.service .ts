import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class JobService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  get(pageNo:any,pageSize:any,searchText:string): Observable<any> {
    return this.http.get(`job-description/jobdescription-list?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchText}`);
    }
  getall(): Observable<any> {
    return this.http.get(`job-description`);
    }
  delete(id: string): Observable<any> {
    return this.http.delete(`job-description/delete/${id}`);
  }
  active(id: string): Observable<any> {
    return this.http.get(`job-description/active/${id}`);
  }
  publish(id: string): Observable<any> {
    return this.http.get(`job-description/publish/${id}`);
  }
  approve(id: string): Observable<any> {
    return this.http.get(`job-description/approve/${id}`);
  }
  saveUpdate(formValues: any): Observable<any> {
    console.log(formValues);
    return this.http.post(`job-description`, formValues);
  }
}
