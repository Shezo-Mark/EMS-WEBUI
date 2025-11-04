import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class PermissionService {

  constructor(private http: HttpRequestService) {
  }
  getPermissionItemByRole(roleId:string): Observable<any> {
    return this.http.get(`user-management/role-Permission?RoleId=${roleId}`);
  }
  saveUpdateRolePermission(item:any): Observable<any> {
    return this.http.post(`user-management/role-Permission/save-update`,item);
  }
}