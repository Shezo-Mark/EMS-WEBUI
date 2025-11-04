import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class CourseService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  getcourses(): Observable<any> {
    return this.http.get(`master/course`);
  }
coursesList(pageNo:any,pageSize:any,searchText:any): Observable<any> {
  return this.http.get(`master/course/courses-list?pageNo=`+pageNo+'&pageSize='+pageSize+'&searchText='+searchText);
  }
savecourses(course:any): Observable<any> {
    return this.http.post(`master/course`,course);
  }
}