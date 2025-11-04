import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class ClassService {

  constructor(private http: HttpRequestService) {
  }
  getbranchclass(branchId:any): Observable<any> {
    return this.http.get(`master-data/classes/branch-classes/`+branchId);
  }
getclassbyId(classId:any): Observable<any> {
  return this.http.get(`master-data/classes/by-classid/`+classId);
  }
}