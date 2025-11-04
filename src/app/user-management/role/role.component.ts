import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { paginationEnum } from 'src/app/shared/Enum/paginationEnum';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { v4 as uuidv4 } from 'uuid';
declare var require: any;
const Swal = require('sweetalert2');
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  public roleForm!: FormGroup;
  
  
  submitted = false;
  gridList:any[]=[];
  curdBtnIsList:boolean = true;
  pagination:any = paginationEnum;
  searchText: string='';
  departmentService: any;
  departmentList: any[] = [];
  constructor(private fb: FormBuilder, private toast: ToastrService, private http: HttpRequestService) {
    this.roleForm = this.fb.group({
      RoleId: uuidv4(),
      RoleName: ["", Validators.required],
      DepartmentId: ['', Validators.required],
      DefaultUrl: ["", Validators.required],
      KeyCode: [""],
      IsActive: [true],
    });
  }

  ngOnInit(): void {
    this.getRoleList();
    this.getdepartments();
  }
  setValueToForm(row: any) {
    
    this.roleForm.controls['DepartmentId'].setValue(row.departmentId);
  }
  get basicFormControl() {
    return this.roleForm.controls;
  }
  onPageChange(event: any) {

    this.pagination.pageNo = event;
    this.getRoleList();
    // You can perform any necessary actions with the selected page number here
  }
  getdepartments() {

    this.departmentService.getall().subscribe({
      next: (result: { data: never[]; }) => {

        this.departmentList = [];
        this.departmentList = result.data;
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
  onSearchText(){
    this.pagination.pageNo=1;
    this.pagination.pageSize=10;
    this.getRoleList();
  }
  getRoleList(){
    if (this.pagination.pageSize == null)
    this.pagination.pageSize = 10;
    this.http.get('user-management/role/roles-list?pageNo=' + this.pagination.pageNo + '&pageSize=' + this.pagination.pageSize+'&searchText='+this.searchText).subscribe({
      next: result => {
        
        this.gridList=[];
        this.gridList =  result.data.data;
        this.pagination.totalCount = result.data.totalCount;
      },
      error: (err: any) => {this.toast.error(err.message)},
      });
}
  changeCurdView(bitVal:boolean){
    this.curdBtnIsList = bitVal;
  }
  update(row:any){
  this.roleForm.controls['RoleId'].setValue(row.roleId);
  this.roleForm.controls['RoleName'].setValue(row.roleName);
  this.roleForm.controls['DefaultUrl'].setValue(row.defaultUrl);
  this.roleForm.controls['KeyCode'].setValue(row.keyCode);
  this.curdBtnIsList = false;
  }
  isRecordExist(){
    const existing = this.gridList.find(obj => obj.roleName.trim().toLowerCase() === this.roleForm.value.RoleName.trim().toLowerCase() && obj.roleId!=this.roleForm.value.RoleId);

    if (existing) {
      this.toast.error("Role Name already exists")
      return true;
    }
    return false;
  }
  formSubmit() {
    this.submitted = true;
    let roleName = this.roleForm.controls['RoleName'].value;
    this.roleForm.controls['KeyCode'].setValue(roleName);
    if (!this.roleForm.valid)
      return;
      if(this.isRecordExist())
      return;
    this.http.post('user-management/role/create-update', this.roleForm.value).subscribe((d: any) => {
      this.roleForm.reset();
      this.roleForm.controls['RoleId'].setValue(uuidv4());
      this.toast.success("New Role has been Created");
      this.curdBtnIsList = true;
      this.getRoleList();
    },
      (error) => {
        this.toast.error(error.error);
      });
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
        this.http.get(`user-management/role/delete?id=${row.roleId}`).subscribe({
          next: result => {
            if(result.status){
              this.getRoleList();
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
    this.http.get(`user-management/role/active?id=${row.roleId}`).subscribe({
      next: result => {
        if(result.status){
          this.getRoleList();
          this.toast.success(result.message)
        }
      },
      error: (err: any) => {this.toast.error(err.message)},
      });
  }
}

