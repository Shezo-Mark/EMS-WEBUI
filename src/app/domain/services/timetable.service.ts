import { Observable, Subject, generate } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class TimeTableService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  getTimetableByClassId(classId:any): Observable<any> {
    return this.http.get(`timetable/getbyclassid?ClassId=`+classId);
  }
getTimetableBySectionId(classId:any,SectionId:any): Observable<any> {
  return this.http.get(`timetable/getbysectionid?ClassId=`+classId+`&sectionid=`+SectionId);
  }
timetableList(pageNo:any,pageSize:any,searchText:any): Observable<any> {
  return this.http.get(`timetable?pageNo=`+pageNo+'&pageSize='+pageSize+'&searchText='+searchText);
  }

deletetimetable(id:any): Observable<any> {
  return this.http.get(`teacher/delete?id=`+id);
  }
activetimetable(id:any): Observable<any> {
  return this.http.get(`/timetable/active?id=`+id);
  }

generatetimetable(branchid:any): Observable<any> {
  return this.http.post(`timetable/generatetimetable`,branchid);
  }
generatetimetablebyclass(classId:any): Observable<any> {
  
  return this.http.get(`timetable/generatetimetablebyclass?classid=`+classId);
  }
generatetimetablebysection(classId:any, sectionid:any): Observable<any> {
  
  return this.http.get(`timetable/generatetimetablebysection?classid=`+classId+`&sectionid=`+sectionid);
  }

}