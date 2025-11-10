import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentService } from 'src/app/domain/services/department.service';
import { FunctionService } from 'src/app/domain/services/function.service';
import { GroupService } from 'src/app/domain/services/group.service';
import { ToastrService } from 'ngx-toastr';
import { LovService } from 'src/app/domain/services/Lov.service';
import { AcadmicYearService } from 'src/app/domain/services/acadmic-year.service';
import { AreaService } from 'src/app/domain/services/area.service';
import { ClassService } from 'src/app/domain/services/class.service';
import { ClassSectionService } from 'src/app/domain/services/classsection.service';
import { EmployeeService } from 'src/app/domain/services/employee.service';
import { StudentService } from 'src/app/domain/services/student.service';
import { ZoneService } from 'src/app/domain/services/zone.service';
import { FilePathEnum } from 'src/app/shared/Enum/documentTableName-enum';
import { LevelService } from 'src/app/domain/services/level.service ';
import { LovCode } from 'src/app/shared/Enum/lov-enum';
import { AuthService } from 'src/app/shared/security/auth-service.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { ConfigService } from 'src/app/shared/services/config.service';
import { v4 as uuidv4 } from 'uuid';
import { JobService } from 'src/app/domain/services/job.service ';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [DatePipe,AreaService],
})
export class RegistrationComponent implements OnInit {
  employeeId: any;
  url: string | ArrayBuffer | null | undefined;
  urlAttachment!: string | ArrayBuffer | null;
  @ViewChild('stepper') stepper!: MatStepper;
  attachmentFileName: string = 'Please select Medical report Attachment';
  registrationForm!: FormGroup;
  parentRegistrationForm!: FormGroup;
  submitted = false;
  isEdit = false;
  dateofbirthPicker: { day?: number; month: number; year: number };
  dateOfJoiningPicker: { day?: number; month: number; year: number };
  RenewPicker: { day?: number; month: number; year: number };
  attachmentList: any[] = [];
  jobDescriptiontList: any[] = [];
  genderList: any[] = [];
  emplyeeDesignationList: any[]=[];
  levelList: any[] = [];
  departmentList: any[] = [];
  functionList: any[] = [];
  EmploymentType: any[] = [];

  groupList: any[] = [];
  employeeDetails: any;
  baseUrl: any = this.configService.baseApiUrl;
  FilePath: any = FilePathEnum;
  classSectionList: any[] = [];
  maritalList: any[] = [];
  employeetypeList: any[] = [];
  employmenttypeList: any[]=[];
  working:boolean=false;
  jobDescriptionList: any[]=[];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly toast: ToastrService,
    private readonly LovServ: LovService,
    private readonly modalService: NgbModal,
    private departmentService: DepartmentService,
    private functionService: FunctionService,
    private groupService: GroupService,
    private readonly employeeService: EmployeeService,
    private readonly common: CommonService,
    private jobService: JobService,
    private levelService: LevelService,
    private readonly datePipe: DatePipe,
    private readonly configService: ConfigService
  ) {
    this.registrationForm = this.fb.group({
      EmployeeId: uuidv4(),
      EmployeeCode: [''],
      FirstName: ['', Validators.required],
      MiddleName: [''],
      LastName: ['', Validators.required],
      Contact:['', Validators.required],
      PersonalEmail: ['', [Validators.pattern(this.common.emailPatteren)]], //Validators.required,
      DateOfJoining: ['', Validators.required],
      DateOfBirth: ['', Validators.required],
      LevelId: ['',Validators.required],
      DepartmentId: ['',Validators.required],
      FunctionId: [null],
      GroupId: ['',Validators.required],

      Cnic: ['', Validators.required],
      GenderId: ['', Validators.required],
      EmployeeDesignationId: ['',Validators.required],
      EmploymentTypeId: ['',Validators.required],
      // MaritalStatusId: null,
      JobDescriptionId: [null],
      // EducationTypeId: null,
      // EmployeeTypeId: null,
      CurrentStreetAddress: [''],
      CurrentMohallah: [''],
      CurrentTehsil: [''],
      CurrentDistrict: [''],
      CurrentCity: [''],
      CurrentState: [''],
      PermanentStreetAddress: [''],
      PermanentMohallah: [''],
      PermanentTehsil: [''],
      PermanentDistrict: [''],
      PermanentCity: [''],
      PermanentState: [''],
      IsPicturePermission: [true],
      Picture: [''],
      Base64: [''],
      ImagePath: [FilePathEnum.ProfilePictures],
      IsActive: [true],
      IsDeleted: [false],
    });
    const today = new Date();
    this.dateofbirthPicker = { day: 1, month: 1, year: 2000 };
    this.RenewPicker = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: new Date().getFullYear(),
    };
    this.dateOfJoiningPicker = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    };
   // this.common.generateRandomCode(6)
    // this.registrationForm.controls['EmployeeCode'].setValue(
    //   'EMP-01'
    // );
  }
  goToNextStep() {
    this.stepper.next();
  }
  ngOnInit(): void {
    this.employeeId = this.route.snapshot.queryParamMap.get('id');
// Use forkJoin for these specific API calls
  forkJoin({
    gender: this.LovServ.getLevelByCode(LovCode.GENDER),
    groups: this.groupService.getall(),
    employeeDesignation: this.LovServ.getLevelByCode(LovCode.EMPLOYEE_DESIGNATION),
    maritalStatus: this.LovServ.getLevelByCode(LovCode.MARITAL_STATUS),
    employeeType: this.LovServ.getLevelByCode(LovCode.EMPLOYMENT_TYPE),
    employmentType: this.LovServ.getLevelByCode(LovCode.EMPLOYMENT_TYPE),
    jobDescriptions: this.jobService.getall()
  }).subscribe({
    next: (results) => {
      // Assign data to your arrays
      debugger
      this.genderList = results.gender.data;
      this.groupList = results.groups.data;
      this.emplyeeDesignationList = results.employeeDesignation.data;
      this.maritalList = results.maritalStatus.data;
      this.employeetypeList = results.employeeType.data;
      this.employmenttypeList = results.employmentType.data;
      this.jobDescriptionList = results.jobDescriptions.data;

      // Now get employee data after dropdowns are loaded
      if (this.employeeId != null && this.employeeId != '') {
        this.isEdit = true;
        this.getEmployeeById(this.employeeId);
      } else {
        this.isEdit = false;
      }
         if(!this.employeeId){
    this.getEmployeeCode();
    }
    },
    error: (err: any) => {
      this.toast.error(err?.error?.message);
    }
  });

  }

  onGroupChange(event:any){
    this.getdepartmentsbyGroupId(event.id);
    this.getlevelsbyGroupCode(event.code)
    this.getfunctionsbyGroupId(event.id);
  }

  onGroupChanging(event: any,item:any) {
  const departments$ = this.departmentService.getdepartmentsbyGroupId(event.id);
  const levels$ = this.levelService.getlevelsbyGroupCode(event.code);
  const functions$ = this.functionService.getfunctionsbyGroupId(event.id);
  const employment$ = this.LovServ.getLevelByCode(event.id);

  forkJoin({
    departments: departments$,
    levels: levels$,
    functions: functions$,
    employment: employment$
  }).subscribe({
    next: (result) => {
      // Assign data from all three API calls
      this.departmentList = result.departments.data;
      console.log('Departments:', this.departmentList);
      this.levelList = result.levels.data;
      this.functionList = result.functions.data;
      this.EmploymentType = result.employment.data;
            this.registrationForm.controls['LevelId'].setValue(item.levelId);
            this.registrationForm.controls['DepartmentId'].setValue(item.departmentId);
            this.registrationForm.controls['FunctionId'].setValue(item.functionId);
            this.registrationForm.controls['EmploymentTypeId'].setValue(item.employmentTypeId);
    },
    error: (err) => {
      this.toast.error(err.message);
    }
  });
}
  getEmployeeById(employeeId: string) {
    this.employeeService.getEmployeeById(employeeId).subscribe({
      next: (result) => {
        this.employeeDetails = result.data;
        this.setRegistrationValuesForupdate(this.employeeDetails);
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
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
    getdepartmentsbyGroupId(groupId:string) {

      this.departmentService.getdepartmentsbyGroupId(groupId).subscribe({
        next: result => {

          this.departmentList=[];
          this.departmentList = result.data;
        },
        error: (err: any) => { this.toast.error(err.message) },
      });
    }
    getlevelsbyGroupCode(groupCode:string) {

      this.levelService.getlevelsbyGroupCode(groupCode).subscribe({
        next: result => {

          this.levelList=[];
          this.levelList = result.data;
        },
        error: (err: any) => { this.toast.error(err.message) },
      });
    }
    getfunctionsbyGroupId(groupId:string) {

      this.functionService.getfunctionsbyGroupId(groupId).subscribe({
        next: result => {

          this.functionList=[];
          this.functionList = result.data;
        },
        error: (err: any) => { this.toast.error(err.message) },
      });
    }

    getgroups() {

      this.groupService.getall().subscribe({
        next: result => {

          this.groupList=[];
          this.groupList = result.data;
        },
        error: (err: any) => { this.toast.error(err.message) },
      });
    }

  setRegistrationValuesForupdate(item: any) {
    this.registrationForm.controls['EmployeeId'].setValue(item.employeeId);
    if (!item.employeeCode) {
     // this.common.generateRandomCode(6)
      this.registrationForm.controls['EmployeeCode'].setValue(
        'EMP-01'
      );
    } else {
      this.registrationForm.controls['EmployeeCode'].setValue(item.employeeCode);
    }
    this.registrationForm.controls['FirstName'].setValue(item.firstName);
    this.registrationForm.controls['MiddleName'].setValue(item.middleName);
    this.registrationForm.controls['LastName'].setValue(item.lastName);
    this.registrationForm.controls['Contact'].setValue(item.contact);
    this.registrationForm.controls['PersonalEmail'].setValue(item.personalEmail);
    let FormateDOB = this.datePipe.transform(item?.dateOfBirth, 'yyyy-MM-dd');
    let splitDOB: any = FormateDOB?.split('-');
    if (Array.isArray(splitDOB)) {
      this.dateofbirthPicker = {
        day: Number(splitDOB[2]),
        month: Number(splitDOB[1]),
        year: Number(splitDOB[0]),
      };
    }
    let FormateDOBJoing = this.datePipe.transform(
      item.dateOfJoining,
      'yyyy-MM-dd'
    );
    let splitDOBJoining: any = FormateDOBJoing?.split('-');
    if (Array.isArray(splitDOBJoining)) {
      this.dateOfJoiningPicker = {
        day: Number(splitDOBJoining[2]),
        month: Number(splitDOBJoining[1]),
        year: Number(splitDOBJoining[0]),
      };
    }

    this.registrationForm.controls['Cnic'].setValue(item.cnic);
    this.registrationForm.controls['Contact'].setValue(item.contact);
    this.registrationForm.controls['GenderId'].setValue(item.genderId);

    this.registrationForm.controls['GroupId'].setValue(item.groupId);
    if(item.groupId){

      let selectedGroup = this.groupList.find(group => group.id === item.groupId);
       this.onGroupChanging(selectedGroup,item);

    }
    this.registrationForm.controls['EmployeeDesignationId'].setValue(item.employeeDesignationId);
    // this.registrationForm.controls['EmployeeTypeId'].setValue(item.employeeTypeId);
    // this.registrationForm.controls['MaritalStatusId'].setValue(item.maritalStatusId);
    // this.registrationForm.controls['EducationTypeId'].setValue(item.educationTypeId);
    this.registrationForm.controls['JobDescriptionId'].setValue(item.jobDescriptionId);
    this.registrationForm.controls['EmploymentTypeId'].setValue(item.employmentTypeId);

    this.registrationForm.controls['IsPicturePermission'].setValue(item.isPicturePermission);
    this.registrationForm.controls['Picture'].setValue(item.picture);
    this.registrationForm.controls['CurrentStreetAddress'].setValue(item.currentStreetAddress);
    this.registrationForm.controls['CurrentMohallah'].setValue(item.currentMohallah);
    this.registrationForm.controls['CurrentCity'].setValue(item.currentCity);
        this.registrationForm.controls['CurrentTehsil'].setValue(item.currentTehsil);
    this.registrationForm.controls['CurrentDistrict'].setValue(item.currentDistrict);
    this.registrationForm.controls['CurrentState'].setValue(item.currentState);
    this.registrationForm.controls['PermanentStreetAddress'].setValue(item.permanentStreetAddress);
    this.registrationForm.controls['PermanentMohallah'].setValue(item.permanentMohallah);
    this.registrationForm.controls['PermanentTehsil'].setValue(item.permanentTehsil);
    this.registrationForm.controls['PermanentDistrict'].setValue(item.permanentDistrict);
    this.registrationForm.controls['PermanentCity'].setValue(item.permanentCity);
    this.registrationForm.controls['PermanentState'].setValue(item.permanentState);
    this.registrationForm.controls['IsActive'].setValue(item.isActive);
    this.registrationForm.controls['IsDeleted'].setValue(item.isDeleted);
    if (item.picture)
      this.url =
        this.baseUrl + this.FilePath.ProfilePictures + '/' + item.picture;
  }
  getEmployeeTypeByLovCode(): void {
    this.LovServ.getLevelByCode(LovCode.EMPLOYMENT_TYPE).subscribe({
      next: (result) => {
        this.employeetypeList = result.data;
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  getEmployeeCode(): void {
    this.employeeService.getEmployeeCode().subscribe({
      next: (result) => {
        this.registrationForm.controls['EmployeeCode'].setValue(result.data);
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  getlevels() {

    this.levelService.getall().subscribe({
      next: result => {

        this.levelList=[];
        this.levelList = result.data;
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
  getGenderByLovCode(): void {
    this.LovServ.getLevelByCode(LovCode.GENDER).subscribe({
      next: (result) => {
        this.genderList = result.data;
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  getjobDescriptions() {

    this.jobService.getall().subscribe({
      next: result => {
        this.jobDescriptionList=[];
        this.jobDescriptionList = result.data;
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
    getEmployeeDesignationByLovCode(): void {
    this.LovServ.getLevelByCode(LovCode.EMPLOYEE_DESIGNATION).subscribe({
     next: (result) => {
      this.emplyeeDesignationList = result.data;
   },
     error: (err: any) => {
       this.toast.error(err?.error?.message);
     },
     });
   }
  getMaritalStatusByLovCode(): void {
    this.LovServ.getLevelByCode(LovCode.MARITAL_STATUS).subscribe({
      next: (result) => {
        this.maritalList = result.data;
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  get basicFormControl() {
    return this.registrationForm.controls;
  }

  onRemove() {
    this.url = null;
    this.registrationForm.controls['Base64'].setValue('');
  }
  onRemoveAttachment() {
    this.attachmentFileName = 'Please select Medical report Attachment';
  }
  onSelectFile(event: any) {
    if (event.addedFiles && event.addedFiles[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.addedFiles[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        if (event.target) {
          this.url = event.target.result;
          this.registrationForm.controls['Base64'].setValue(this.url);
        }
        // this.p.setValue(this.url);
      };
    }
  }
  formatBytes(bytes: number): string {
    const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const factor = 1024;
    let index = 0;
    while (bytes >= factor) {
      bytes /= factor;
      index++;
    }
    return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
  }
  openScrollableContent(ScroleContent: any) {
    this.modalService.open(ScroleContent);
  }
  formSubmit() {
    this.submitted = true;

    if (!this.registrationForm.valid) {
      this.toast.error('Please complete all required fields before proceeding.');
      return;
    }
    // let DateOfBirth =
    //   this.dateofbirthPicker.year +
    //   '-' +
    //   this.dateofbirthPicker.month +
    //   '-' +
    //   this.dateofbirthPicker.day;
      let yeard = this.dateofbirthPicker.year;
      let monthd = String(this.dateofbirthPicker.month).padStart(2, '0');
      let dayd = String(this.dateofbirthPicker.day).padStart(2, '0');

      let DateOfBirth = `${yeard}-${monthd}-${dayd}`;
    // if(this.RenewPicker!=null || this.RenewPicker!=undefined){
    //   let RenewPicker = this.RenewPicker.year + '-' + this.RenewPicker.month + '-' + this.RenewPicker.day;
    //   this.registrationForm.value['RenewDate'] = RenewPicker;
    // }
    // let DateOfJoining =
    //   this.dateOfJoiningPicker.year +
    //   '-' +
    //   this.dateOfJoiningPicker.month +
    //   '-' +
    //   this.dateOfJoiningPicker.day;
      let year = this.dateOfJoiningPicker.year;
      let month = String(this.dateOfJoiningPicker.month).padStart(2, '0');
      let day = String(this.dateOfJoiningPicker.day).padStart(2, '0');

      let DateOfJoining = `${year}-${month}-${day}`;
      this.registrationForm.value['DateOfBirth'] = DateOfBirth;

    this.registrationForm.value['DateOfJoining'] = DateOfJoining;
    if (
      this.registrationForm.controls['IsPicturePermission'].value &&
      this.registrationForm.controls['Base64'].value == '' &&
      this.registrationForm.controls['Picture'].value == ''
    ) {
      this.toast.warning('Please select profile image');
      return;
    }
    this.working = true;

    this.employeeService.save(this.registrationForm.value).subscribe({
      next: (result: any) => {
        if (result) {
          this.employeeId = result.data;
          this.toast.success("Your details have been saved.");
          this.stepper.next();
        } else this.toast.error('Somethings went wrong...');
        this.working = false;
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
        this.working = false;
      },
    });
  }

  copyCurrentToPermanent(event: any) {
    if (event.target.checked) {
      this.registrationForm.patchValue({
        PermanentStreetAddress: this.registrationForm.value.CurrentStreetAddress,
        PermanentMohallah: this.registrationForm.value.CurrentMohallah,
        PermanentTehsil: this.registrationForm.value.CurrentTehsil,
        PermanentDistrict: this.registrationForm.value.CurrentDistrict,
        PermanentCity: this.registrationForm.value.CurrentCity,
        PermanentState: this.registrationForm.value.CurrentState
      });
    } else {
      this.registrationForm.patchValue({
        PermanentStreetAddress: '',
        PermanentMohallah: '',
        PermanentTehsil: '',
        PermanentDistrict: '',
        PermanentCity: '',
        PermanentState: ''
      });
    }
  }

}
