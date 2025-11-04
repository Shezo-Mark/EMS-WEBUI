import { Component } from '@angular/core';
//import { Observable } from 'rxjs';
//import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from 'src/app/domain/services/permission.service';
import { GroupBy } from 'src/app/domain/groupBy/groupby';
import { CommonService } from 'src/app/shared/services/common.service';
@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent {
roleId:any;
permisssions:any[] = [];
GroupArraypermisssions:any[] = [];
roles:any[] = [];
constructor(
 private http: HttpRequestService,private toast: ToastrService,
 private readonly common:CommonService,
 private PermissionSrv:PermissionService,private Group:GroupBy
) {
  this.getRoleList();
}
getRoleList(){
  this.http.get('user-management/role/get').subscribe({
    next: result => {
      this.roles =   this.common.sortByProperty(result.data,'roleName');
    },
    error: (err: any) => {this.toast.error(err.message)},
    });
}
onChangeRole(){
  this.PermissionSrv.getPermissionItemByRole(this.roleId).subscribe({
    next: result => {
      this.GroupArraypermisssions = [];
      this.permisssions =  result.data;
    //  this.GroupArraypermisssions.push(this.buildHierarchy(this.permisssions)[0]);
    this.GroupArraypermisssions = this.buildHierarchy(this.permisssions);
    },
    error: (err: any) => {this.toast.error(err.message)},
    });
}
saveUpdateRolePermission(){
  let updatedPermission = this.flattenHierarchy(this.GroupArraypermisssions).filter(x=>x.isAssigned == true);
  let flattenPermission = {json:JSON.stringify(updatedPermission),RoleId:this.roleId};
  this.PermissionSrv.saveUpdateRolePermission(flattenPermission).subscribe({
    next: result => {
      this.toast.success('Permission Saved')
    },
    error: (err: any) => {this.toast.error(err.message)},
    });
}
checkParentSelected(index:any,item:any){
  
let ifChildSelected = this.GroupArraypermisssions[index].children.some((x: { isAssigned: boolean; })=>x.isAssigned ==true)

 if(ifChildSelected)
  this.GroupArraypermisssions[index].isAssigned = true;
  else
  this.GroupArraypermisssions[index].isAssigned = false;

}
// buildHierarchy(items:any){
//   let groupedItems = items.reduce((result: any[], item: { parentId: any; }) => {
//     const parentId = item.parentId;
//     if (parentId === null) {
//       result.push({ ...item, children: [] });
//     } else {
//       const parent = result.find((r) => r.permissionItemId === parentId);
//       if (parent) {
//         parent.children.push(item);
//       }
//     }
//     return result;
//   }, []);
//   
//   return groupedItems;
// }

buildHierarchy(items:any){
let parents = items.filter((x: { parentId: null; })=>x.parentId == null)
let result: any[] = [];
  for (let index = 0; index < parents.length; index++) {
    result.push({ ...parents[index], children: [] });
    let child = items.filter((x: { parentId: any; })=>x.parentId == parents[index].permissionItemId);
    if(child.length > 0)
    result[index].children.push(...child);
  }

  return result;
}
 flattenHierarchy(items:any) {
  const result: any[] = [];
  items.forEach((item: { [x: string]: any; children: any; }) => {
    const { children, ...rest } = item;
    result.push(rest);
    if (children && children.length > 0) {
      result.push(...this.flattenHierarchy(children));
    }
  });
  return result;
}
}
