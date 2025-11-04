import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor(private http: HttpRequestService) {
  }
  save(employee:any): Observable<any> {
    return this.http.post(`employee`,employee);
  }
  getEmployeeCode(): Observable<any> {
    return this.http.get('employee/get-empcode');
  }
  getEmployeesByDesignation(DesignationCode:string): Observable<any> {
    return this.http.get('employee/get-employees-by-designation?DesignationCode='+DesignationCode);
  }
  getEmployees(pageNo:string,pageSize:string,searchText:string): Observable<any> {
    return this.http.get(`employee/get-employees?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchText}`);
  }
  updateEducation(education:any): Observable<any> {
    return this.http.post(`employee/update-education`,education);
  }

  updatePreviousExperience(previous:any): Observable<any> {
    return this.http.post(`employee/update-perivous-experience`,previous);
  }
  updateFamily(family:any): Observable<any> {
    return this.http.post(`employee/update-family`,family);
  }
  updateChildren(children:any): Observable<any> {
    return this.http.post(`employee/update-children`,children);
  }
  getFamilyByEmployeeId(employeeId: string): Observable<any> {
    return this.http.get('employee/get-family?employeeId='+employeeId);
  }
  getChildrenByEmployeeId(employeeId: string): Observable<any> {
    return this.http.get('employee/get-children?employeeId='+employeeId);
  }
  SaveEducationType(employeeId: string,educationTypeId:string): Observable<any> {
    return this.http.get('employee/save-education-type?employeeId='+employeeId+'&educationTypeId='+educationTypeId);
  }
  getFamilyById(familyId: string): Observable<any> {
    return this.http.get('employee/get-family-byId?employeeId='+familyId);
  }
  getChildrenById(childrenId: string): Observable<any> {
    return this.http.get('employee/get-children-byId?employeeId='+childrenId);
  }
  getExperienceoByEmployeeId(employeeId: string): Observable<any> {
    return this.http.get('employee/get-experience?employeeId='+employeeId);
  }
  getEducationByEmployeeId(employeeId: string): Observable<any> {
    return this.http.get('employee/get-education?employeeId='+employeeId);
  }
  getEmployeeById(employeeId: string): Observable<any> {
    return this.http.get('employee/get-employee-byId?employeeId='+employeeId);
  }
  active(id:any): Observable<any> {
    return this.http.get(`employee/active?employeeId=`+id);
    }
}