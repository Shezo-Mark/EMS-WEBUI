import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class BranchService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  getbranches(): Observable<any> {
    return this.http.get(`master/branch`);
  }
}