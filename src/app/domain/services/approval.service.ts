import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class ApprovalService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
getapprovalhistory(pageNo:any,pageSize:any,branchId:any,status:any,searchText:any): Observable<any> {
  return this.http.get(`approval-mechanism/approval/approval-history?pageNo=`+pageNo+'&pageSize='+pageSize+'&branchId='+branchId+'&status='+status+'&searchText='+searchText);
  }

}