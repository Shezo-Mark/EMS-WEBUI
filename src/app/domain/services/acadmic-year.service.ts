import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class AcadmicYearService {
  constructor(private http: HttpRequestService, private toast: ToastrService) {}
  get(pageNo: any, pageSize: any, searchText: string): Observable<any> {
    return this.http.get(
      `master/acadmicyear/AcadmicYears-list?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchText}`
    );
  }
  getall(): Observable<any> {
    return this.http.get(`master/acadmicyear`);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`master/acadmicyear/delete/${id}`);
  }
  active(id: string): Observable<any> {
    return this.http.get(`master/acadmicyear/active/${id}`);
  }
  isLock(id: string): Observable<any> {
    return this.http.get(`master/acadmicyear/isLock/${id}`);
  }
  saveUpdate(formValues: any): Observable<any> {
    return this.http.post(`master/acadmicyear`, formValues);
  }
}
