import { Observable, Subject, generate } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class ContractService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  getStudentContractByStudentID(studentid:any, language:any): Observable<any> {
    return this.http.get(`/Contract/getcontact?Language=`+language+"&StudentId="+studentid);
  }

}