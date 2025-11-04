import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class StudentDocumentService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  getDocuments(): Observable<any> {
    return this.http.get(`master/student-document`);
  }
studentDocumentsList(pageNo:any,pageSize:any,searchText:string=''): Observable<any> {
  return this.http.get(`master/student-document/document-list?pageNo=`+pageNo+'&pageSize='+pageSize+'&searchText='+searchText);
  }
saveStudentDocument(data:any): Observable<any> {
    return this.http.post(`master/student-document`,data);
  }
deleteStudentDocument(id:any): Observable<any> {
  return this.http.delete(`master/student-document/delete?id=`+id);
  }
activeStudentDocument(id:any): Observable<any> {
  return this.http.get(`master/student-document/active?id=`+id);
  }
isRequiredStudentDocument(id:any): Observable<any> {
  return this.http.get(`master/student-document/required?id=`+id);
  }
}