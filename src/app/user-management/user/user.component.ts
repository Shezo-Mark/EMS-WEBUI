import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { th } from 'date-fns/locale';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from 'src/app/domain/services/branch.service';
import { paginationEnum } from 'src/app/shared/Enum/paginationEnum';
import { CommonService } from 'src/app/shared/services/common.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { v4 as uuidv4 } from 'uuid';
declare var require: any;
const Swal = require('sweetalert2');
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public userForm!: FormGroup;
  isSubmitted = false;
  curdBtnIsList:boolean = true;
  roleList:any[] = [];
  userList:any[] = [];
  isEdit=false;
  pagination:any = paginationEnum;
  searchText:string='';
  constructor(private fb: FormBuilder, private toast: ToastrService, private http: HttpRequestService,
    private readonly common:CommonService,
    private readonly branchSrv: BranchService) {
    this.userForm = this.fb.group({
      UserId: uuidv4(),
      Email: ["", Validators.required],
      fullName: ["", Validators.required],
      RoleId: [uuidv4(),Validators.required],
      Password: ["", Validators.required],
      ConfirmPassword: ["", Validators.required]

    });
  }
  ngOnInit(): void {
    this.getRoleList();
    this.getUserList();
  }
  onSearchText(){
    this.pagination.pageNo=1;
    this.pagination.pageSize=10;
    this.getUserList();
  }
  get basicFormControl() {
    return this.userForm.controls;
  }
  onPageChange(event: any) {

    this.pagination.pageNo = event;
    this.getUserList();
    // You can perform any necessary actions with the selected page number here
  }
  getUserList(){
    if (this.pagination.pageSize == null)
    this.pagination.pageSize = 10;
    this.http.get('user-management/user/users-list?pageNo=' + this.pagination.pageNo + '&pageSize=' + this.pagination.pageSize+'&searchText='+this.searchText).subscribe({
      next: result => {
        this.userList=[];
        this.userList =  result.data;
        this.pagination.totalCount = result.data[0].totalRecords;
      },
      error: (err: any) => {this.toast.error(err.message)},
      });
    }
  getRoleList(){
    this.http.get('user-management/role/get').subscribe({
      next: result => {
        this.roleList =  this.common.sortByProperty(result.data,'roleName');
      },
      error: (err: any) => {this.toast.error(err.message)},
      });
}
  changeCurdView(bitVal:boolean){
    this.curdBtnIsList = bitVal;
    this.isEdit=false;
  }
  isRecordExist(){
    const existingUser = this.userList.find(user => user.email.trim().toLowerCase() === this.userForm.value.Email.trim().toLowerCase() && user.branchId===this.userForm.value.branchId && user.userId!=this.userForm.value.UserId);

    if (existingUser) {
      this.toast.error("Email already exists")
      return true;
    }
    return false;
  }
  formSubmit() {
    
    this.isSubmitted = true;
    if (!this.userForm.valid)
      return;
      if(this.isRecordExist())
      return;
      if (this.userForm.value.Password !== this.userForm.value.ConfirmPassword) {
        this.toast.error("Please enter password match");return;
      } 
      
      this.http.post('user-management/user/add-update-user', this.userForm.value).subscribe((d: any) => {
        this.toast.success("Updated Successfully..!");
        this.userForm.reset();

        this.userForm.controls['UserId'].setValue(uuidv4());
        this.isEdit=false;
        this.curdBtnIsList = true;
        this.getUserList();
      },
        (error) => {
          this.toast.error(error.error);
        });
  }
  update(row:any){
    
    this.userForm.controls['UserId'].setValue(row.userId);
    this.userForm.controls['RoleId'].setValue(row.roleId);
    this.userForm.controls['Email'].setValue(row.email);
    this.userForm.controls['fullName'].setValue(row.fullName);
    // this.userForm.controls['IsJobCreator'].setValue(row.isJobCreator);
    // this.userForm.controls['IsJobApprover'].setValue(row.isJobApprover);
    // this.userForm.controls['IsJobPublisher'].setValue(row.isJobPublisher);
    this.userForm.controls['Password'].setValue('abc');
    this.userForm.controls['ConfirmPassword'].setValue('abc');
    this.curdBtnIsList = false;
    this.isEdit=true;
    }
  deleteRow(row:any) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'Your will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonColor: '#6259ca',
      cancelButtonColor: '#6259ca',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true,
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.http.get(`user-management/user/delete?id=${row.userId}`).subscribe({
          next: result => {
            if(result.status){
              this.userForm.reset();
              this.userForm.controls['UserId'].setValue(uuidv4());
              this.getUserList();
              this.toast.success(result.message)
            }
          },
          error: (err: any) => {this.toast.error(err.message)},
          });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#6259ca',
        });
      }
    });
  }
  IsActive(row:any){
    this.http.get(`user-management/user/active?id=${row.userId}`).subscribe({
      next: result => {
        if(result.status){
          this.getUserList();
          this.toast.success(result.message)
        }
      },
      error: (err: any) => {this.toast.error(err.message)},
      });
  }
  get Password() { return this.userForm.get("Password"); }
  get ConfirmPassword() { return this.userForm.get("ConfirmPassword"); }
}
