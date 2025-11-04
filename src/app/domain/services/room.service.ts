import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
    providedIn: 'root',
  })
export class RoomService {

  constructor(private http: HttpRequestService,private toast: ToastrService) {
  }
  getrooms(): Observable<any> {
    return this.http.get(`master/room`);
  }
roomsList(pageNo:any,pageSize:any,branchId:any,searchText:any): Observable<any> {
  return this.http.get(`master/room/room-list?pageNo=`+pageNo+'&pageSize='+pageSize+'&branchId='+branchId+'&searchText='+searchText);
  }
saveroom(data:any): Observable<any> {
    return this.http.post(`master/room`,data);
  }
}