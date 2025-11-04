import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private http: HttpRequestService) {
  }
  save(student:any): Observable<any> {
    return this.http.post(`student`,student);
  }
  getStudentBasicInfo(studentId: string): Observable<any> {
    return this.http.get(`student/basic-info/${studentId}`);
  }

  getRemarksInfo(studentId: string): Observable<any> {
    return this.http.get(`student/remarks-info/${studentId}`);
  }
  getStudentById(studentId: string): Observable<any> {
    return this.http.get(`student/by-studentid?studentId=${studentId}`);
  }
  getStudentByStatus(status: string, branch: any, page: number, pageSize: number, searchText: string = ''): Observable<any> {
    return this.http.get(`student/status/${status}/branch/${branch}/page/${page}/page-size/${pageSize}?searchText=${searchText}`);
  }
  getStudentByProperty(property: string, branch: any, page: number, pageSize: number, searchText: string = ''): Observable<any> {
    return this.http.get(`student/property/${property}/branch/${branch}/page/${page}/page-size/${pageSize}?searchText=${searchText}`);
  }
  getStudentBasicInfoByUserId(): Observable<any> {
    return this.http.get(`student/basic-info-by-userid`);
  }
  saveStudentPreviousSchoolDetails(postData: any): Observable<any> {
    return this.http.post(`student/previous-school-info`, postData);
  }
  submit(studentId: string, branchId: string,comments:string): Observable<any> {
    return this.http.put(`student/submit?studentId=${studentId}&branchId=${branchId}&comments=${comments}`, null);
  }
  getStudentParentInfoByStudentId(studentId: string): Observable<any> {
    return this.http.get(`student/parent-info/${studentId}`);
  }
  getPreviousSchoolInfoByStudentId(studentId: string): Observable<any> {
    return this.http.get(`student/previous-school-info/${studentId}`);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`student/delete/${id}`);
  }
  active(id: string): Observable<any> {
    return this.http.get(`student/active/${id}`);
  }
  saveStudentWidthDraw(postData: any): Observable<any> {
    return this.http.post(`student/student-widthdraw`, postData);
  }
  reRegistrationStudent(postData: any): Observable<any> {
    return this.http.post(`student/student-re-registration`, postData);
  }
  saveSibblingStudent(postData: any): Observable<any> {
    return this.http.post(`student/save-sibbling-student`, postData);
  }
  getStudentByHCode(hCode: string): Observable<any> {
    return this.http.get(`student/basic-info-by-hcode/${hCode}`);
  }
  getSibblingStudentByStudentId(studentId: string): Observable<any> {
    return this.http.get(`student/student-sibbling/${studentId}`);
  }
}