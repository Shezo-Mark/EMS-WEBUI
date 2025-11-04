import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class QuizzAssignmentService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  post(assignmentData: any): Observable<any> {
    return this.http.post(`assignment`, assignmentData);
  }
  get(pageNo:any,pageSize:any,searchText:any): Observable<any> {
    return this.http.get(`assignment?pageNo=`+pageNo+'&pageSize='+pageSize+'&searchText='+searchText);
    }
  getAssignmentQuizzByStudentClass(pageNo:any,pageSize:any,searchText:any): Observable<any> {
    return this.http.get(`assignment/by-student-class-assignment?pageNo=`+pageNo+'&pageSize='+pageSize+'&searchText='+searchText);
    }
  delete(id: string): Observable<any> {
    return this.http.delete(`assignment/delete/${id}`);
  }
  getStudentOfAssignmentClass(quizzAssignmentId:any): Observable<any> {
    return this.http.get(`assignment/by-student-assignment-class?quizzAssignmentId=${quizzAssignmentId}`);
    }
  saveStudentMarks(body: any): Observable<any> {
    return this.http.post(`assignment/save-student-marks`, body);
  }
  lockMarks(quizzAssignmentId: any): Observable<any> {
    return this.http.put(`assignment/lock-marks`, quizzAssignmentId);
  }
}