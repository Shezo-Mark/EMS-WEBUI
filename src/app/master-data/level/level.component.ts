import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { paginationEnum } from 'src/app/shared/Enum/paginationEnum';
import { ZoneService } from 'src/app/domain/services/zone.service';
import { AuthService } from 'src/app/shared/security/auth-service.service';
import Swal from 'sweetalert2';
import { LevelService } from 'src/app/domain/services/level.service ';
@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'], 
})
export class LevelComponent {
  public levelForm!: FormGroup;
  submitted = false;
  curdBtnIsList:boolean = true;
  pagination:any = paginationEnum;
  isEdit: boolean=false;
  searchText:string='';
  branchId:any;
  levelList: any[] = [];
  groups = [
    { text: 'Others' },
    { text: 'Executive' },
    {  text: 'C-Suite' }
  ];
  constructor( 
    private fb: FormBuilder, 
    private toast: ToastrService,
    private levelService: LevelService, 
    private http: HttpRequestService,
    private authSrv : AuthService) {
    this.levelForm = this.fb.group({
      LevelId: [uuidv4()],
      LevelName: ['', Validators.required],
      Group:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.getlevels();
  }
  get basicFormControl() {
    return this.levelForm.controls;
  }
  onPageChange(event: any) {
    this.pagination.pageNo = event;
    this.getlevels();
  }
  onSearchText(){
    this.pagination.pageNo=1;
    this.pagination.pageSize=10;
    this.getlevels();
  }
  getlevels() {
    if(this.pagination.pageSize==null)
    this.pagination.pageSize=10;
    if(this.pagination.searchText=='')
    this.pagination.searchText = "";
    this.levelService.get(this.pagination.pageNo,this.pagination.pageSize,this.pagination.searchText ).subscribe({
      next: result => {
        debugger;
        this.levelList=[];
        this.levelList = result.data.data;
        // this.levelList.sort((a, b) => {
        //   if (a.isExecutive && !b.isExecutive) {
        //     return -1; // a comes before b
        //   } else if (!a.isExecutive && b.isExecutive) {
        //     return 1; // b comes before a
        //   } else {
        //     return 0; // no change in order
        //   }
        // });
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
    this.levelForm.controls['LevelId'].setValue(row.levelId);
    this.levelForm.controls['LevelName'].setValue(row.levelName);
    this.levelForm.controls['Group'].setValue(row.Group);
    this.curdBtnIsList = false;
    this.isEdit=true;
  }
  formSubmit() {
    debugger;
    this.submitted = true;
    if (!this.levelForm.valid)
      return;
    this.levelService.saveUpdate(this.levelForm.value).subscribe({
      next: (data: any) => {
        this.levelForm.reset();
        this.levelForm.controls['LevelId'].setValue(uuidv4());
        this.toast.success("level has been Saved.");
        this.isEdit=false;
        this.curdBtnIsList =true;
        this.getlevels();
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
        this.levelService.delete(row.levelId).subscribe({
          next: result => {
            if (result.status) {
              this.getlevels();
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
    this.levelService.active(row.levelId).subscribe({
      next: result => {
        if (result.status) {
          this.getlevels();
          this.toast.success("Record Active OR InActive SuccessFully");
        }
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
}
