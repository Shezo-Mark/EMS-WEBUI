import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class LovService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
getLevelByCode(LovCode:string): Observable<any> {
    return this.http.get(`master-data/lov?lovCode=${LovCode}`);
  }
  getStuddentAttachmentByLovCode(LovCode:string): Observable<any> {
    return this.http.get(`master-data/lov/get-studdent-attachment-By-lovcode?lovCode=${LovCode}`);
  }
}
