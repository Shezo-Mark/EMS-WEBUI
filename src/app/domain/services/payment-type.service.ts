import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class PaymentTypeService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }
  getPaymentTypes(): Observable<any> {
    return this.http.get(`master/payment-type`);
  }
  paymentList(pageNo:any,pageSize:any): Observable<any> {
    return this.http.get(`master/payment-type/payment-list?pageNo=`+pageNo+'&pageSize='+pageSize);
    }
  getClassPayments(classId: string): Observable<any> {
    return this.http.get(`master/payment-type/class/${classId}`);
  }
  getpaymentTypesbyBranch(branchId: string): Observable<any> {
    return this.http.get(`master/payment-type/by-branchId/${branchId}`);
  }
  savepaymentTypes(paymentType: any): Observable<any> {
    return this.http.post(`master/payment-type`, paymentType);
  }
}