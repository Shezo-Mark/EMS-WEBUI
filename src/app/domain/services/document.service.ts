import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { DocumentModel } from 'src/app/shared/models/document.Model';
@Injectable({
    providedIn: 'root',
  })
export class DocumentService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
uploadFile(model:DocumentModel): Observable<any> {
    return this.http.post(`master/document`,model);
  }
  studentUploadDocument(model:DocumentModel): Observable<any> {
    return this.http.post(`master/document/student-document-uploaded`,model);
  }
  employeeUploadDocument(model:DocumentModel): Observable<any> {
    return this.http.post(`master/document/employee-document-uploaded`,model);
  }
  GetUploadFile(Table:string,TableRefrenceId:string): Observable<any> {
    return this.http.get(`master/document?Table=${Table}&TableRefrenceId=${TableRefrenceId}`);
  }
  getEmployeeDocument(Table:string,TableRefrenceId:string): Observable<any> {
    return this.http.get(`master/document/get-employee-document?Table=${Table}&TableRefrenceId=${TableRefrenceId}`);
  }
  deleteDocument(documentId: string): Observable<any> {
    return this.http.delete(`master/document/deleteDocument/${documentId}`);
  }
}
