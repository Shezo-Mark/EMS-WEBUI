import { Component } from '@angular/core';
//import { Observable } from 'rxjs';
//import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { ToastrService } from 'ngx-toastr';
import { PermissionService } from 'src/app/domain/services/permission.service';
import { GroupBy } from 'src/app/domain/groupBy/groupby';
import { CommonService } from 'src/app/shared/services/common.service';
@Component({
  selector: 'app-job-permission',
  templateUrl: './job-permission.component.html',
  styleUrls: ['./job-permission.component.scss']
})
export class JobPermissionComponent {
roleId:any;
departmentId:any;
permisssions:any[] = [];
GroupArraypermisssions:any[] = [];
jobPermissionList:any[] = [];
roles:any[] = [];
  deparments: any[]=[];
constructor(
 private http: HttpRequestService,private toast: ToastrService,
 private readonly common:CommonService,
 private PermissionSrv:PermissionService,private Group:GroupBy
) {
  this.getJobPermissions();
 // this.getRoleList();
  //this.getDepartmentsList();
}
// getRoleList(){
//   this.http.get('user-management/role/get').subscribe({
//     next: result => {
//       this.roles =   this.common.sortByProperty(result.data,'roleName');
//     },
//     error: (err: any) => {this.toast.error(err.message)},
//     });
// }
// getDepartmentsList(){
//   this.http.get('master/department').subscribe({
//     next: result => {
//       this.deparments =   this.common.sortByProperty(result.data,'deparmentName');
//     },
//     error: (err: any) => {this.toast.error(err.message)},
//     });
// }

getJobPermissions(){
  this.http.get('user-management/jobpermission').subscribe({
    next: result => {
     this.jobPermissionList =  result.data; 
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
onChangeDepartment(){
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

  IsJobCreator(row:any){
    this.http.get(`user-management/jobpermission/isjobcreator?roleId=${row.roleId}&departmentId=${row.departmentId}`).subscribe({
      next: result => {
        if(result.status){
         // this.getUserList();
          this.toast.success(result.message)
        }
      },
      error: (err: any) => {this.toast.error(err.message)},
      });
  }
    IsJobApprover(row:any){
    this.http.get(`user-management/jobpermission/isjobapprover?roleId=${row.roleId}&departmentId=${row.departmentId}`).subscribe({
      next: result => {
        if(result.status){
        //  this.getUserList();
          this.toast.success(result.message)
        }
      },
      error: (err: any) => {this.toast.error(err.message)},
      });
  }
    IsJobPublisher(row:any){
    this.http.get(`user-management/jobpermission/isjobpublisher?roleId=${row.roleId}&departmentId=${row.departmentId}`).subscribe({
      next: result => {
        if(result.status){
         // this.getUserList();
          this.toast.success(result.message)
        }
      },
      error: (err: any) => {this.toast.error(err.message)},
      });
  }
}
