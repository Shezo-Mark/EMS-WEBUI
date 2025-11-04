import { Observable} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class TemplateService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  getTemplates(): Observable<any> {
    return this.http.get(`master/template`);
  }
templatesList(pageNo:any,pageSize:any,branchId:any,searchText:any): Observable<any> {
  return this.http.get(`master/template/template-list?pageNo=`+pageNo+'&pageSize='+pageSize+'&branchId='+branchId+'&searchText='+searchText);
  }
saveTemplate(data:any): Observable<any> {
    return this.http.post(`master/template`,data);
  }
}