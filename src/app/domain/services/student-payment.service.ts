import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class StudentPaymentService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  
  save(studentPayment: any): Observable<any> {
    return this.http.post(`student-payments`, studentPayment);
  }
  received(studentId: any): Observable<any> {
    return this.http.post(`student-payments/received/${studentId}`, null);
  }
  getList(branch: any, page: number, pageSize: number, searchText: string = ''): Observable<any> {
    return this.http.get(`student-payments/branch/${branch}/page/${page}/page-size/${pageSize}?searchText=${searchText}`);
  }
  getStudentPayement(studentId: string): Observable<any> {
    return this.http.get(`student-payments/details/${studentId}`);
  }

  getStudentDiscounts(studentId: string): Observable<any> {
    return this.http.get(`student-payments/discounts/${studentId}`);
  }
}