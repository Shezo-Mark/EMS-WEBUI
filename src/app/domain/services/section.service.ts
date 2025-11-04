import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class SectionService {

  constructor(private http: HttpRequestService) {
  }
  getsections(): Observable<any> {
    return this.http.get(`master/section`);
  }
sectonsList(pageNo:any,pageSize:any,searchText:any): Observable<any> {
  return this.http.get(`master/section/section-list?pageNo=`+pageNo+'&pageSize='+pageSize+'&searchText='+searchText);
  }
savesections(course:any): Observable<any> {
    return this.http.post(`master/section`,course);
  }
delete(id: string): Observable<any> {
  return this.http.delete(`master/section/delete/${id}`);
}
active(id: string): Observable<any> {
  return this.http.get(`master/section/active/${id}`);
}
}