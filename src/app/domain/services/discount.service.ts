import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class DiscountService {

  constructor(private http: HttpRequestService) {
  }
  getByBranch( branchId:string): Observable<any> {
    return this.http.get(`master/discount/branches/${branchId}`);
  }
  discountList(pageNo: any, pageSize: any, branchId: any, searchText: any): Observable<any> {
    return this.http.get(`master/discount/discount-list?pageNo=` + pageNo + '&pageSize=' + pageSize + '&branchId=' + branchId + '&searchText=' + searchText);
  }
  savediscount(course: any): Observable<any> {
    return this.http.post(`master/discount`, course);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`master/discount/delete/${id}`);
  }
  active(id: string): Observable<any> {
    return this.http.get(`master/discount/active/${id}`);
  }
}