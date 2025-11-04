import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class TeacherService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  getTeacherById(teacherId:any): Observable<any> {
    return this.http.get(`teacher/teacher-id?TeacherId=`+teacherId);
  }
teachersList(pageNo:any,pageSize:any,branchId:any,searchText:any): Observable<any> {
  return this.http.get(`teacher?pageNo=`+pageNo+'&pageSize='+pageSize+'&branchId='+branchId+'&searchText='+searchText);
  }
saveteacher(postData:any): Observable<any> {
    return this.http.post(`teacher`,postData);
  }
deleteteacher(id:any): Observable<any> {
  return this.http.get(`teacher/delete?id=`+id);
  }
activeteacher(id:any): Observable<any> {
  return this.http.get(`teacher/active?id=`+id);
  }
getTeacherByStatus(status:string,branch:any,page:number,pageSize:number,searchText:string=''): Observable<any> {
  return this.http.get(`teacher/status/${status}/branch/${branch}/page/${page}/page-size/${pageSize}?searchText=${searchText}`);
}
getTeacherBasicInfo(teacherId:string): Observable<any> {
  return this.http.get(`teacher/basic-info/${teacherId}`);
}
saveteacheruser(postData:any): Observable<any> {
  return this.http.post(`teacher-users/update-teacher-user`,postData);
  }
}