import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { paginationEnum } from 'src/app/shared/Enum/paginationEnum';
import { ZoneService } from 'src/app/domain/services/zone.service';
import { AuthService } from 'src/app/shared/security/auth-service.service';
import Swal from 'sweetalert2';

import { PostHostService } from 'src/app/domain/services/posthost.service';
@Component({
  selector: 'app-posthost',
  templateUrl: './posthost.component.html',
  styleUrls: ['./posthost.component.scss']
})
export class PostHostComponent {
  public posthostForm!: FormGroup;
  submitted = false;
  curdBtnIsList:boolean = true;
  pagination:any = paginationEnum;
  isEdit: boolean=false;
  searchText:string='';
  branchId:any;
  posthostList: any[] = [];
  constructor(
    private fb: FormBuilder, 
    private toast: ToastrService,
    private posthostService: PostHostService, 
    private http: HttpRequestService,
    private authSrv : AuthService) {
    this.posthostForm = this.fb.group({
      PostHostId: [uuidv4()],
      PostHostName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getposthosts();
  }
  get basicFormControl() {
    return this.posthostForm.controls;
  }
  onPageChange(event: any) {
    this.pagination.pageNo = event;
    this.getposthosts();
  }
  onSearchText(){
    this.pagination.pageNo=1;
    this.pagination.pageSize=10;
    this.getposthosts();
  }
  getposthosts() {
    if(this.pagination.pageSize==null)
    this.pagination.pageSize=10;
    if(this.pagination.searchText=='')
    this.pagination.searchText = "";
    this.posthostService.get(this.pagination.pageNo,this.pagination.pageSize,this.pagination.searchText ).subscribe({
      next: result => {
        debugger;
        this.posthostList=[];
        this.posthostList = result.data.data;
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
    this.posthostForm.controls['PostHostId'].setValue(row.postHostId);
    this.posthostForm.controls['PostHostName'].setValue(row.postHostName);
    this.curdBtnIsList = false;
    this.isEdit=true;
  }
  formSubmit() {
    debugger;
    this.submitted = true;
    if (!this.posthostForm.valid)
      return;
    this.posthostService.saveUpdate(this.posthostForm.value).subscribe({
      next: (data: any) => {
        this.posthostForm.reset();
        this.posthostForm.controls['PostHostId'].setValue(uuidv4());
        this.toast.success("posthost has been Saved.");
        this.isEdit=false;
        this.curdBtnIsList =true;
        this.getposthosts();
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
        this.posthostService.delete(row.postHostId).subscribe({
          next: result => {
            if (result.status) {
              this.getposthosts();
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
    this.posthostService.active(row.postHostId).subscribe({
      next: result => {
        if (result.status) {
          this.getposthosts();
          this.toast.success("Record Active OR InActive SuccessFully");
        }
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
}
