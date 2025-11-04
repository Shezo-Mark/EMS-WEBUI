import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class StudentDataService {

  constructor(private http: HttpRequestService, private toast: ToastrService) {
  }

  getStudentDataByProperty(studentId: string,property:string): Observable<any> {
    return this.http.get(`student-data/value/${studentId}/${property}`);
  }

}