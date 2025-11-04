import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccessriesService } from 'src/app/domain/services/accessries.service';
import { paginationEnum } from 'src/app/shared/Enum/paginationEnum';
import { AuthService } from 'src/app/shared/security/auth-service.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-aceessries',
  templateUrl: './aceessries.component.html',
  styleUrls: ['./aceessries.component.scss']
})
export class AceessriesComponent {
  public accessoriesForm!: FormGroup;
  submitted = false;
  curdBtnIsList: boolean = true;
  pagination: any = paginationEnum;
  isEdit: boolean = false;
  searchText: string = '';
  accessoriesList: any;

  constructor(
    private fb: FormBuilder, 
    private toast: ToastrService,
    private accessoriesService: AccessriesService, 
    private authSrv: AuthService
  ) {
    this.accessoriesForm = this.fb.group({
      AccessoriesId: [uuidv4()],
      AccessoriesName: ['', Validators.required],
      AccessBrandName:[''],
      IsActive: [false] 
    });
    
  }

  ngOnInit(): void {
    this.getAccessories();
  }

  get basicFormControl() {
    return this.accessoriesForm.controls;
  }

  onPageChange(event: any) {
    this.pagination.pageNo = event;
    this.getAccessories();
  }

  onSearchText() {
    this.pagination.pageNo = 1;
    this.pagination.pageSize = 10;
    this.getAccessories();
  }

  getAccessories() {
    if (!this.pagination.pageSize) this.pagination.pageSize = 10;
    if (!this.pagination.searchText) this.pagination.searchText = "";
  
    this.accessoriesService.getAllAccessories().subscribe({
      next: (result: any) => {
      const a =   this.accessoriesList = result;
        if (this.accessoriesList.length > 0) {
          this.pagination.totalCount = this.accessoriesList.length;
        }
      },
      error: (err: any) => this.toast.error(err.message),
    });
  }
  
  

  changeCurdView(bitVal: boolean) {
    this.curdBtnIsList = bitVal;
    this.isEdit = false;
  }

  setValueToForm(row: any) {
    this.accessoriesForm.controls['AccessoriesId'].setValue(row.accessoriesId);
    this.accessoriesForm.controls['AccessoriesName'].setValue(row.accessoriesName);
    this.curdBtnIsList = false;
    this.isEdit = true;
  }

  formSubmit() {
    this.submitted = true;
    if (!this.accessoriesForm.valid) return;

    const request = this.isEdit
      ? this.accessoriesService.update(this.accessoriesForm.value)
      : this.accessoriesService.createAccessory(this.accessoriesForm.value);

    request.subscribe({
      next: () => {
        this.accessoriesForm.reset();
        this.accessoriesForm.controls['AccessoriesId'].setValue(uuidv4());
        this.toast.success("Accessory has been saved.");
        this.isEdit = false;
        this.curdBtnIsList = true;
        this.getAccessories();
      },
      error: (err: any) => this.toast.error(err.error),
    });
  }

  
  deleteRow(row: any) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.accessoriesService.delete(row.accessoriesId).subscribe({
          next: () => {
            this.getAccessories();
            this.toast.success("Accessory deleted successfully.", "Deleted", {
              closeButton: true,
              timeOut: 3000,
            });
          },
          error: (err: any) => {
            console.error('Delete error:', err); 
            this.toast.error(err.message || "Failed to delete the accessory.", "Error", {
              closeButton: true,
              timeOut: 3000,
            });
          },
        });
      }
    });
  }
  
  
  IsActive(row: any) {
    this.accessoriesService.activate(row.accessoriesId).subscribe({
      next: () => {
        this.getAccessories();
        this.toast.success("Record activated or deactivated successfully");
      },
      error: (err: any) => this.toast.error(err.message),
    });
  }
  
}



