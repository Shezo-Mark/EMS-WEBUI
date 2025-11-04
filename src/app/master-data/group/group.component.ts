import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { paginationEnum } from 'src/app/shared/Enum/paginationEnum';
import { ZoneService } from 'src/app/domain/services/zone.service';
import { AuthService } from 'src/app/shared/security/auth-service.service';
import Swal from 'sweetalert2';
import { GroupService } from 'src/app/domain/services/group.service';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  public groupForm!: FormGroup;
  submitted = false;
  curdBtnIsList:boolean = true;
  pagination:any = paginationEnum;
  isEdit: boolean=false;
  searchText:string='';
  branchId:any;
  groupList: any[] = [];
  constructor(
    private fb: FormBuilder, 
    private toast: ToastrService,
    private groupService: GroupService, 
    private http: HttpRequestService,
    private authSrv : AuthService) {
    this.groupForm = this.fb.group({
      GroupId: [uuidv4()],
      GroupName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getgroups();
  }
  get basicFormControl() {
    return this.groupForm.controls;
  }
  onPageChange(event: any) {
    this.pagination.pageNo = event;
    this.getgroups();
  }
  onSearchText(){
    this.pagination.pageNo=1; 
    this.pagination.pageSize=10;
    this.getgroups();
  }
  getgroups() {
    if(this.pagination.pageSize==null)
    this.pagination.pageSize=10;
    if(this.pagination.searchText=='')
    this.pagination.searchText = "";
    this.groupService.get(this.pagination.pageNo,this.pagination.pageSize,this.pagination.searchText ).subscribe({
      next: result => {
        debugger;
        this.groupList=[];
        this.groupList = result.data.data;
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
    this.groupForm.controls['GroupId'].setValue(row.groupId);
    this.groupForm.controls['GroupName'].setValue(row.groupName);
    this.curdBtnIsList = false;
    this.isEdit=true;
  }
  formSubmit() {
    debugger;
    this.submitted = true;
    if (!this.groupForm.valid)
      return;
    this.groupService.saveUpdate(this.groupForm.value).subscribe({
      next: (data: any) => {
        this.groupForm.reset();
        this.groupForm.controls['GroupId'].setValue(uuidv4());
        this.toast.success("group has been Saved.");
        this.isEdit=false;
        this.curdBtnIsList =true;
        this.getgroups();
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
        this.groupService.delete(row.groupId).subscribe({
          next: result => {
            if (result.status) {
              this.getgroups();
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
  IsActive(row: any) {
    this.groupService.active(row.groupId).subscribe({
      next: result => {
        if (result.status) {
          this.getgroups();
          this.toast.success("Record Active OR InActive SuccessFully");
        }
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
}
