import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { paginationEnum } from 'src/app/shared/Enum/paginationEnum';
import { ZoneService } from 'src/app/domain/services/zone.service';
import { AuthService } from 'src/app/shared/security/auth-service.service';
import { GroupService } from 'src/app/domain/services/group.service';
import Swal from 'sweetalert2';
import { DepartmentService } from 'src/app/domain/services/department.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  public departmentForm!: FormGroup;
  submitted = false;
  curdBtnIsList:boolean = true;
  pagination:any = paginationEnum;
  isEdit: boolean=false;
  searchText:string='';
  branchId:any;
  departmentList: any[] = [];
  groupList: any[] = [];
  constructor(
    private fb: FormBuilder, 
    private toast: ToastrService,
    private groupService: GroupService, 
    private departmentService: DepartmentService, 
    private http: HttpRequestService,
    private authSrv : AuthService) {
    this.departmentForm = this.fb.group({
      DepartmentId: [uuidv4()],
      GroupId: ['',Validators.required],
      DepartmentName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getdepartments();
    this.getgroups();
  }
  get basicFormControl() {
    return this.departmentForm.controls;
  }
  onPageChange(event: any) {
    this.pagination.pageNo = event;
    this.getdepartments();
  }
  onSearchText(){
    this.pagination.pageNo=1;
    this.pagination.pageSize=10;
    this.getdepartments();
  }
  getdepartments() {
    if(this.pagination.pageSize==null)
    this.pagination.pageSize=10;
    if(this.pagination.searchText=='')
    this.pagination.searchText = "";
    this.departmentService.get(this.pagination.pageNo,this.pagination.pageSize,this.pagination.searchText ).subscribe({
      next: result => {
        debugger;
        this.departmentList=[];
        this.departmentList = result.data.data;
        if(result.data.data.length > 0)
        this.pagination.totalCount=result.data.totalCount;
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
  changeCurdView(bitVal: boolean) {
    this.curdBtnIsList = bitVal;
    this.isEdit=false;
  }
  setValueToForm(row: any) {
    this.departmentForm.controls['DepartmentId'].setValue(row.departmentId);
    this.departmentForm.controls['DepartmentName'].setValue(row.departmentName);
    this.departmentForm.controls['GroupId'].setValue(row.groupId);
    this.curdBtnIsList = false;
    this.isEdit=true;
  }
  formSubmit() {
    debugger;
    this.submitted = true;
    if (!this.departmentForm.valid)
      return;debugger;
    this.departmentService.saveUpdate(this.departmentForm.value).subscribe({
      next: (data: any) => {
        this.departmentForm.reset();
        this.departmentForm.controls['DepartmentId'].setValue(uuidv4());
        this.toast.success("department has been Saved.");
        this.isEdit=false;
        this.curdBtnIsList =true;
        this.getdepartments();
      },
      error: (err: any) => {
        this.toast.error(err.error);
      },
    });
  }
  deleteRow(row: any) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'You will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonColor: '#6259ca',
      cancelButtonColor: '#6259ca',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true,
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.departmentService.delete(row.departmentId).subscribe({
          next: result => {
            if (result.status) {
              this.getdepartments();
              this.toast.success("Record Deleted SuccessFully")
            }
          },
          error: (err: any) => { this.toast.error(err.message) },
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your class has been deleted.',
          icon: 'success',
          confirmButtonColor: '#6259ca',
        });
      }
    });
  }
  getgroups() {

    this.groupService.getall().subscribe({
      next: result => {
        debugger;
        this.groupList=[];
        this.groupList = result.data;
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
  IsActive(row: any) {
    this.departmentService.active(row.departmentId).subscribe({
      next: result => {
        if (result.status) {
          this.getdepartments();
          this.toast.success("Record Active OR InActive SuccessFully");
        }
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
}
