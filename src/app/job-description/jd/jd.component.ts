import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { DepartmentService } from 'src/app/domain/services/department.service';
import { PostHostService } from 'src/app/domain/services/posthost.service';
import { GroupService } from 'src/app/domain/services/group.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { AuthService } from 'src/app/shared/security/auth-service.service';
import { paginationEnum } from 'src/app/shared/Enum/paginationEnum';
import { EmployeeService } from 'src/app/domain/services/employee.service';
import { DesignationCode, LovCode } from 'src/app/shared/Enum/lov-enum';
import { LovService } from 'src/app/domain/services/Lov.service';
import { Editor, Toolbar } from 'ngx-editor';
import { DatePipe } from '@angular/common';
import { JobService } from 'src/app/domain/services/job.service ';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploadService } from 'src/app/domain/services/file-upload.service';
import { SharedModule } from "../../shared/shared.module";
import { environment } from 'src/environments/environment';
import { UserModel } from 'src/app/shared/models/user.model';
import { OnboardingService } from 'src/app/domain/services/onboarding.service';
import { StateService } from 'src/app/domain/services/state.service';
@Component({
  selector: 'app-jd',
  templateUrl: './jd.component.html',
  styleUrls: ['./jd.component.scss'],
  providers: [DatePipe],
})
export class JDComponent {
  editor: any;
  public jobForm!: FormGroup;
  showNotification = false;
  submitted = false;
  curdBtnIsList: boolean = true;
  pagination: any = paginationEnum;
  isEdit: boolean = false;
  jobOpeningDatePicker: { day?: number; month: number; year: number };

  searchText: string = '';
  branchId: any;
  departmentList: any[] = [];
  CompainesList: any[] = [];
  posthostList: any[] = [];
  groupList: any[] = [];

  managerList: any[] = [];
  employmenttypeList: any[] = [];
  jobList: any[] = [];

  selectedFiles: File[] = [];
  referenceId: number = 1;

    // jobId: string = '';


  idList = [
    { id: 1, text: '1' },
    { id: 2, text: '2' },
    { id: 3, text: '3' },
    { id: 4, text: '4' },
    { id: 5, text: '5' },
    { id: 6, text: '6' },
    { id: 7, text: '7' },
    { id: 8, text: '8' },
    { id: 9, text: '9' },
    { id: 10, text: '10' }
  ];
isOpenedFromCompany= false;
selectedCompanyId= '';

loginUser:any={};
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private fileService: FileUploadService,
    private toast: ToastrService,
    private departmentService: DepartmentService,
    private groupService: GroupService,
    private onboardingService: OnboardingService,
    private postHostService: PostHostService,
    private LovServ: LovService,
    private employeeService: EmployeeService,
    private jobService: JobService,
    private readonly datePipe: DatePipe,
    private stateService: StateService,
    private router: Router) {
      const storedData = localStorage.getItem(environment.AuthToken);
  if (storedData) {
    this.loginUser = JSON.parse(atob(storedData));
    //debugger;
  }

    this.jobForm = this.fb.group({
      JobDescriptionId: uuidv4(),
      DepartmentId: ['', Validators.required],
      OnboardingId: [''],
      GroupId: ['', Validators.required],
      PostHostId: ['', Validators.required],
      HiringManagerId: ['', Validators.required],
      EmploymentTypeId: ['', Validators.required],
      Title: ['', Validators.required],
      JobOpeningDate: ['', Validators.required],
      Description: ['', Validators.required],
      NumberOfJobs: [1, Validators.required],
    });
    const today = new Date();
    this.jobOpeningDatePicker = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    };

  }





  ngOnInit(): void {
    this.editor = new Editor();
    this.getgroups();

    this.getdepartments();
    this.getposthosts();
    this.getHiringManagers();
    this.getEmploymentTypeByLovCode();
    this.getjobdescriptions();
      this.getCompanies();

  this.isOpenedFromCompany = this.stateService.getOpenedFromCompany()
  this.selectedCompanyId = this.stateService.getSelectedCompany() || ''
  this.jobForm.controls['OnboardingId'].setValue(this.selectedCompanyId);

      if (this.isOpenedFromCompany) {
      this.curdBtnIsList = false;
    } else {
      this.curdBtnIsList = true;
    }
    console.log(this.selectedCompanyId)

  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  get basicFormControl() {
    return this.jobForm.controls;
  }
  onPageChange(event: any) {
    this.pagination.pageNo = event;
    this.getjobdescriptions();
  }
  onSearchText() {
    this.pagination.pageNo = 1;
    this.pagination.pageSize = 10;
    this.getjobdescriptions();
  }

  getEmploymentTypeByLovCode(): void {
    this.LovServ.getLevelByCode(LovCode.EMPLOYMENT_TYPE).subscribe({
      next: (result) => {
        this.employmenttypeList = result.data;
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  getdepartments() {

    this.departmentService.getall().subscribe({
      next: result => {

        this.departmentList = [];
        this.departmentList = result.data;
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }

  getCompanies() {
   this.onboardingService.getAll().subscribe({
    next: result => {
      this.CompainesList = [];
      this.CompainesList = result.data;
    },
    error: (err: any) => {this.toast.error(err.message)},
   });
  }

  getposthosts() {

    this.postHostService.getall().subscribe({
      next: result => {

        this.posthostList = [];
        this.posthostList = result.data;
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
  getgroups() {

    this.groupService.getall().subscribe({
      next: result => {

        this.groupList = [];
        this.groupList = result.data;
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }

  getHiringManagers() {

    this.employeeService.getEmployeesByDesignation(DesignationCode.MANAGER).subscribe({
      next: result => {

        this.managerList = [];
        this.managerList = result.data;
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
  changeCurdView(bitVal: boolean) {
    this.curdBtnIsList = bitVal;
    this.isEdit = false;
  }
  setValueToForm(row: any) {
//debugger
    this.jobForm.controls['JobDescriptionId'].setValue(row.jobDescriptionId);
    this.jobForm.controls['DepartmentId'].setValue(row.departmentId);
    this.jobForm.controls['OnboardingId'].setValue(row.onboardingId);
    this.jobForm.controls['PostHostId'].setValue(row.postHostId);
    this.jobForm.controls['GroupId'].setValue(row.groupId);
    this.jobForm.controls['HiringManagerId'].setValue(row.hiringManagerId);
    this.jobForm.controls['EmploymentTypeId'].setValue(row.employmentTypeId);
    this.jobForm.controls['Title'].setValue(row.title);
    this.jobForm.controls['Description'].setValue(row.description);
    this.jobForm.controls['NumberOfJobs'].setValue(row.numberOfJobs);
    this.curdBtnIsList = false;
    this.isEdit = true;
    let FormateOpeningDate = this.datePipe.transform(
      row.jobOpeningDate,
      'yyyy-MM-dd'
    );
    let splitOpeningDate: any = FormateOpeningDate?.split('-');
    if (Array.isArray(splitOpeningDate)) {
      this.jobOpeningDatePicker = {
        day: Number(splitOpeningDate[2]),
        month: Number(splitOpeningDate[1]),
        year: Number(splitOpeningDate[0]),
      };
    }
  }
  deleteRow(row: any) {



    console.log(row);

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
        this.jobService.delete(row.jobDescriptionId).subscribe({
          next: result => {
            if (result.status) {
              this.getjobdescriptions();
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
    this.jobService.active(row.jobDescriptionId).subscribe({
      next: result => {
        if (result.status) {
          this.getjobdescriptions();
          this.toast.success("Record Updated SuccessFully");
        }
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
  Approved(row: any) {

    this.jobService.approve(row.jobDescriptionId).subscribe({
      next: result => {
        if (result.status) {
          this.getjobdescriptions();
          this.toast.success("Record Approved SuccessFully");
        }
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
  Published(row: any) {
    //debugger
    this.jobService.publish(row.jobDescriptionId).subscribe({
      next: result => {
        if (result.status) {
          this.getjobdescriptions();
          this.toast.success("Record Published SuccessFully");
        }
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
  // 3) Send Id
  goDefine(jobDescriptionId: string) {
    this.router.navigate(['/cv', jobDescriptionId]);
  }

  // 2) FileSelect
  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    console.log(files);
    if (files) {
      this.selectedFiles = Array.from(files);
      console.log(this.selectedFiles);
    }
  }


  formSubmit() {
    this.showNotification = true;

    this.submitted = true;
    if (!this.jobForm.valid) return;

  let JobOpeningDate =
    this.jobOpeningDatePicker.year + '-' +
     this.jobOpeningDatePicker.month + '-' +
    this.jobOpeningDatePicker.day;
    const date = new Date(this.jobOpeningDatePicker.year, this.jobOpeningDatePicker.month, this.jobOpeningDatePicker.day);
 // this.jobForm.value['JobOpeningDate'] = JobOpeningDate;
  this.jobForm.value['JobOpeningDate'] = date;

  let jobDescriptionId = this.jobForm.value['JobDescriptionId'];

  this.jobService.saveUpdate(this.jobForm.value).subscribe({
    next: (data: any) => {

      console.log("data",data)
      this.toast.success('Job Description has been saved.');
      this.jobForm.reset();
      this.jobForm.controls['JobDescriptionId'].setValue(uuidv4());
      this.isEdit = false;
      this.curdBtnIsList = true;
      this.getjobdescriptions();
    },
    error: (err: any) => {
      this.toast.error(err.error);
    },
  });
}


  getjobdescriptions() {
    this.jobService.get(1, 10, '').subscribe({
      next: (result) => {
        //debugger
        this.jobList = result.data;
        console.log( "Check Data" ,this.jobList);
      },
      error: (err: any) => {
        this.toast.error(err.message);
      },
    });
  }

  openFile(jobDescriptionId: any): void {
    this.router.navigate(['/cv', jobDescriptionId]);
  }
}
