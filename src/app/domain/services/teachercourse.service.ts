import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class TeacherCourseService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
teacherCoursesList(pageNo:any,pageSize:any,teacherId:any,searchText:any): Observable<any> {
  return this.http.get(`teachercourse/course-by-teacherid?pageNo=`+pageNo+'&pageSize='+pageSize+'&teacherId='+teacherId+'&searchText='+searchText);
  }
saveteachercourse(postData:any): Observable<any> {
    return this.http.post(`teachercourse`,postData);
  }
deleteteachercourse(id:any): Observable<any> {
  return this.http.get(`teachercourse/delete?id=`+id);
  }
activeteachercourse(id:any): Observable<any> {
  return this.http.get(`teachercourse/active?id=`+id);
  }
}