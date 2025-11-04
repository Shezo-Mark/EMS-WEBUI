import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class ClassSectionService {

  constructor(private http: HttpRequestService) {
  }
  getclasssections(): Observable<any> {
    return this.http.get(`master/class-sections`);
  }
classsectionsList(pageNo:any,pageSize:any,classId:any,searchText:any): Observable<any> {
  return this.http.get(`master/class-sections/sections-list?pageNo=`+pageNo+'&pageSize='+pageSize+'&classId='+classId+'&searchText='+searchText);
  }
classsectionByClass(classId:any): Observable<any> {
  return this.http.get(`master/class-sections/sections-byclassId?classId=${classId}`);
  }
saveclasssections(postData:any): Observable<any> {
    return this.http.post(`master/class-sections`,postData);
  }
delete(id: string): Observable<any> {
  return this.http.delete(`master/class-sections/delete/${id}`);
}
active(id: string): Observable<any> {
  return this.http.get(`master/class-sections/active/${id}`);
}
}