import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class ClassCoursesService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  getclasscourses(): Observable<any> {
    return this.http.get(`master/class-courses`);
  }
classcoursesList(pageNo:any,pageSize:any,classId:any,searchText:any): Observable<any> {
  return this.http.get(`master/class-courses/courses-list?pageNo=`+pageNo+'&pageSize='+pageSize+'&classId='+classId+'&searchText='+searchText);
  }
classcourseByClass(classId:any): Observable<any> {
  return this.http.get(`master/class-courses/courses-byclassId?classId=${classId}`);
  }
saveclasscourses(postData:any): Observable<any> {
    return this.http.post(`master/class-courses`,postData);
  }
deleteclasscourses(id:any): Observable<any> {
  return this.http.get(`master/class-courses/delete?id=`+id);
  }
activeclasscourses(id:any): Observable<any> {
  return this.http.get(`master/class-courses/active?id=`+id);
  }
}