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
import { FunctionService } from 'src/app/domain/services/function.service';
@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent {
  public functionForm!: FormGroup;
  submitted = false;
  curdBtnIsList:boolean = true;
  pagination:any = paginationEnum;
  isEdit: boolean=false;
  searchText:string='';
  branchId:any;
  functionList: any[] = [];
  groupList: any[] = [];
  constructor(
    private fb: FormBuilder, 
    private toast: ToastrService,
    private groupService: GroupService, 
    private functionService: FunctionService, 
    private http: HttpRequestService,
    private authSrv : AuthService) {
    this.functionForm = this.fb.group({
      FunctionId: [uuidv4()],
      GroupId: ['',Validators.required],
      FunctionName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getgroups();
    this.getfunctions();
  }
  get basicFormControl() {
    return this.functionForm.controls;
  }
  onPageChange(event: any) {
    this.pagination.pageNo = event;
    this.getfunctions();
  }
  onSearchText(){
    this.pagination.pageNo=1;
    this.pagination.pageSize=10;
    this.getfunctions();
  }
  getfunctions() {
    if(this.pagination.pageSize==null)
    this.pagination.pageSize=10;
    if(this.pagination.searchText=='')
    this.pagination.searchText = "";
    this.functionService.get(this.pagination.pageNo,this.pagination.pageSize,this.pagination.searchText ).subscribe({
      next: result => {
        debugger;
        this.functionList=[];
        this.functionList = result.data.data;
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
    this.functionForm.controls['FunctionId'].setValue(row.functionId);
    this.functionForm.controls['FunctionName'].setValue(row.functionName);
    this.functionForm.controls['GroupId'].setValue(row.groupId);
    this.curdBtnIsList = false;
    this.isEdit=true;
  }
  formSubmit() {
    debugger;
    this.submitted = true;
    if (!this.functionForm.valid)
      return;debugger;
    this.functionService.saveUpdate(this.functionForm.value).subscribe({
      next: (data: any) => {
        this.functionForm.reset();
        this.functionForm.controls['FunctionId'].setValue(uuidv4());
        this.toast.success("function has been Saved.");
        this.isEdit=false;
        this.curdBtnIsList =true;
        this.getfunctions();
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
        this.functionService.delete(row.functionId).subscribe({
          next: result => {
            if (result.status) {
              this.getfunctions();
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
    this.functionService.active(row.functionId).subscribe({
      next: result => {
        if (result.status) {
          this.getfunctions();
          this.toast.success("Record Active OR InActive SuccessFully");
        }
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
}
