import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class TeacherClassService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
teacherClassesList(pageNo:any,pageSize:any,teacherId:any,searchText:any): Observable<any> {
  return this.http.get(`teacherclass?pageNo=`+pageNo+'&pageSize='+pageSize+'&teacherId='+teacherId+'&searchText='+searchText);
  }
saveteacherclass(postData:any): Observable<any> {
    return this.http.post(`teacherclass`,postData);
  }
deleteteacherclass(id:any): Observable<any> {
  return this.http.get(`teacherclass/delete?id=`+id);
  }
activeteacherclass(id:any): Observable<any> {
  return this.http.get(`teacherclass/active?id=`+id);
  }
}