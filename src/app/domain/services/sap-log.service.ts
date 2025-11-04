import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class SapLogService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  getSapLogs(): Observable<any> {
    return this.http.get(`student-payments/sap-logs`);
  }
  createInvoice(studentId:any): Observable<any> {
    return this.http.get(`student-payments/sap-invoice/${studentId}`);
  }
}