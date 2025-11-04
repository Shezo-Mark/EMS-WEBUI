import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoleDepartmentService } from 'src/app/domain/services/role-department.service';
import { paginationEnum } from 'src/app/shared/Enum/paginationEnum';

@Component({
  selector: 'app-role-department',
  templateUrl: './role-department.component.html',
  styleUrls: ['./role-department.component.scss']
})
export class RoleDepartmentComponent implements OnInit {
  public roleDepartmentForm!: FormGroup;
  curdBtnIsList: boolean = true;
  pagination: any = { ...paginationEnum };
  isEdit: boolean = false;
  roleDepartmentList: any[] = [];
  roleDepartmentToEdit: any;

  departments: any[] = [];
  roles: any[] = [];


  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private roleDepartmentService: RoleDepartmentService
  ) {}

  ngOnInit(): void {
    this.roleDepartmentForm = this.fb.group({
      departmentId: ['', Validators.required],
      roleId: ['', Validators.required] 
    });

    this.getRoleDepartments();
    this.loadDepartments();
    this.loadRoles();
  }

  getRoleDepartments() {
    const { pageNo, pageSize, searchText } = this.pagination;
    this.roleDepartmentService.get(pageNo, pageSize, searchText).subscribe({
      next: res => {
        console.log(res.data)
        this.roleDepartmentList = res.data || [];
        this.pagination.totalCount = res.data.totalCount || 0;
      },
      error: err => this.toast.error(err.message || 'Failed to load data')
    });
  }

  loadDepartments() {
    this.roleDepartmentService.getDepartments().subscribe({
      next: res => {
        debugger;
        console.log(res.data)
        this.departments = res.data || [];
      },
      error: err => this.toast.error(err.message || 'Failed to load data')
    });
  }

  loadRoles() {
    this.roleDepartmentService.getRoles().subscribe({
      next: res => {
        debugger;
        console.log(res.data)
        this.roles = res.data || [];
      },
      error: err => this.toast.error(err.message || 'Failed to load data')
    });
  }

  // loadDepartments() {
  //   this.departments = [
  //     { id: 'c9d4c053-49b6-410c-bc78-2d54a9991870', name: 'HR' },
  //     { id: '9d7c5b2b-2a57-4f7f-bc88-6c95c646f840', name: 'Finance' }
  //   ];
  // }
  
  // loadGroups() {
  //   this.groups = [
  //     { id: 'a2a4c09a-8d37-4ed2-b1b4-1fc112b621cf', name: 'Admin' },
  //     { id: 'b08e60f4-7ad9-4ff7-9852-45d4e184fbbe', name: 'User' }
  //   ];
  // }
  

  changeCurdView(isList: boolean) {
    this.curdBtnIsList = isList;
    // this.isEdit = false;
    // this.roleDepartmentForm.reset();
  }

  onSubmit() {
    if (this.roleDepartmentForm.invalid) return;

    const formValues = this.roleDepartmentForm.value;

    const request = this.isEdit
      ? this.roleDepartmentService.update({ ...this.roleDepartmentToEdit, ...formValues })
      : this.roleDepartmentService.add(formValues);

    request.subscribe({
      next: () => {
      debugger;
        this.toast.success(`Role Department ${this.isEdit ? 'updated' : 'added'} successfully`);
        this.getRoleDepartments();
        this.changeCurdView(true);
      },
      error: () => {
        this.toast.error(`Error ${this.isEdit ? 'updating' : 'adding'} Role Department`);
      }
    });
  }

  onEdit(item: any) {
    this.isEdit = true;
    this.roleDepartmentToEdit = item;
    this.roleDepartmentForm.patchValue({
      groupId: item.groupId,
      departmentId: item.departmentId
    });
    this.changeCurdView(false);
  }

  onDelete(departmentId: string, roleId: string) {
    this.roleDepartmentService.delete(departmentId, roleId).subscribe({
      next: () => {
        this.toast.success('Deleted successfully');
        this.getRoleDepartments();
      },
      error: () => {
        this.toast.error('Delete failed');
      }
    });
  }

  onSearchText() {
    this.pagination.pageNo = 1;
    this.getRoleDepartments();
  }

  onPageChange(page: number) {
    this.pagination.pageNo = page;
    this.getRoleDepartments();
  }
}
