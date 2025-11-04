import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class employeeServiceDocumentService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  getDocuments(): Observable<any> {
    return this.http.get(`master/employee-document`);
  }
employeeDocumentsList(pageNo:any,pageSize:any,searchText:string=''): Observable<any> {
  return this.http.get(`master/employee-document/document-list?pageNo=`+pageNo+'&pageSize='+pageSize+'&searchText='+searchText);
  }
saveEmployeeDocument(data:any): Observable<any> {
    return this.http.post(`master/employee-document`,data);
  }
deleteEmployeeDocument(id:any): Observable<any> {
  return this.http.delete(`master/employee-document/delete?id=`+id);
  }
activeEmployeeDocument(id:any): Observable<any> {
  return this.http.get(`master/employee-document/active?id=`+id);
  }
isRequiredEmployeeDocument(id:any): Observable<any> {
  return this.http.get(`master/employee-document/required?id=`+id);
  }
}