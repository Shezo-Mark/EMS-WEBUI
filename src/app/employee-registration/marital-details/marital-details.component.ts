
import { DatePipe } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ToastrService } from 'ngx-toastr';
import { LovService } from 'src/app/domain/services/Lov.service';
import { EmployeeService } from 'src/app/domain/services/employee.service';
import { StudentService } from 'src/app/domain/services/student.service';
import { LovCode } from 'src/app/shared/Enum/lov-enum';
import { CommonService } from 'src/app/shared/services/common.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-marital-details',
  templateUrl: './marital-details.component.html',
  styleUrls: ['./marital-details.component.scss']
})
export class MaritalDetailsComponent  {
  @Input() employeeId: any = '';
  formfamily:FormGroup;
  formchild:FormGroup; 
  submitted = false;
  @ViewChild('stepper') stepper!: MatStepper;
  maritalList: any[]=[];
  aliveList:any[]=[];
  fatherAlivelList:any[]=[];
  motherAliveList:any[]=[];
  spouseAliveList:any[]=[];
  dateofbirthPicker: { day?: number; month: number; year: number };
  childdateofbirthPicker: { day?: number; month: number; year: number };
  genderList:any[]=[];
  selectedMaritalStatus: any={};
  childrenList: any[]=[];
  MaritalStatusId:any;
  constructor(
    private readonly fb: FormBuilder,
    private readonly fbc: FormBuilder,
    private readonly toast: ToastrService,
    private readonly http: HttpRequestService, 
    private readonly datePipe: DatePipe,
    private readonly studentService: StudentService,
    private readonly LovServ: LovService,
    private readonly employeeService: EmployeeService,
    private readonly commonService: CommonService
  ) {
    this.formfamily = this.fb.group({
      FamilyId:uuidv4(),
      MaritalStatusId: ['',Validators.required],
      EmployeeId: ['', Validators.required],
      NameOfSpouse: [''],
      NoOfDependents: [''],
      SpouseAliveStatusId: [''],
      SpouseDateOfBirth: [''],
      NameOfFather: [''],
      FatherAliveStatusId: [''],
      FatherContact: [''],
      NameOfMother: [''],
      MotherAliveStatusId: [''],
      MotherContact: [''],
      NoOfSisters: [''],
      NoOfBrothers: [''],
      EmergencyContact: [''],
      EmergencyContactName: [''],
     
    });
    this.formchild = this.fbc.group({
      ChildrenId:uuidv4(),
      EmployeeId: ['', Validators.required],
      NameOfChild: ['',Validators.required ],
      ChildGenderId: ['',Validators.required ],
      ChildDateOfBirth: ['',Validators.required ],
     
    });
    const today = new Date();
    this.dateofbirthPicker = { day: 1, month: 1, year: 2000 };
    this.childdateofbirthPicker={day:1,month:1,year:2010}
  }
  ngOnInit(): void {
    this.getMaritalStatusByLovCode();
    this.getAliveStatusByLovCode();
    this.getGenderByLovCode();
    if (this.employeeId != '' && this.employeeId != null) {
      this.getFamilyByEmployeeId();
    this.getChildrenByEmployeeId();
    }
  }
  onSelectChange(selectedValue:any) {
    debugger;
    this.selectedMaritalStatus = selectedValue; // Assuming you want the id of the selected item
  }
  FamilyFormSubmit() {
    debugger;
    if (this.employeeId == '' || this.employeeId == null) {
      this.toast.error('Please Edit employee first'); 
      return;
    }
    this.formfamily.controls['EmployeeId'].setValue(this.employeeId);
    this.formfamily.controls['MaritalStatusId'].setValue(this.selectedMaritalStatus.id);
    if(this.selectedMaritalStatus?.code=='MARRIED'){
      let SpouseDateOfBirth =
      this.dateofbirthPicker.year +
      '-' +
      this.dateofbirthPicker.month +
      '-' +
      this.dateofbirthPicker.day;
    this.formfamily.value['SpouseDateOfBirth'] = SpouseDateOfBirth;
    }
   
    this.submitted = true;
    if (!this.formfamily.valid) return;
    this.http
      .post('employee/update-family', this.formfamily.value)
      .subscribe({
        next: (result) => {
          if (result) {
            this.toast.success(result.message);
            //this.formfamily.controls['EducationId'].setValue(uuidv4());
          } else this.toast.error('Somethings went wrong...');
        },
        error: (err: any) => {
          this.toast.error(err?.error?.message);
        },
      });
  }
  ChildrenFormSubmit() {
    debugger;
    if (this.employeeId == '' || this.employeeId == null) {
      this.toast.error('Please Edit employee first'); 
      return;
    }
    this.formchild.controls['EmployeeId'].setValue(this.employeeId);
    let ChildDateOfBirth =
      this.childdateofbirthPicker.year +
      '-' +
      this.childdateofbirthPicker.month +
      '-' +
      this.childdateofbirthPicker.day;
    this.formchild.value['ChildDateOfBirth'] = ChildDateOfBirth;
    this.submitted = true;
    if (!this.formchild.valid) return;
    this.http
      .post('employee/update-children', this.formchild.value)
      .subscribe({
        next: (result) => {
          if (result) {
            this.toast.success(result.message);
            this.formchild.controls['ChildrenId'].setValue(uuidv4());
            this.ClearChildrenForm();
            this.getChildrenByEmployeeId();
            // this.stepper.next();
            // return;
          } else this.toast.error('Somethings went wrong...');
        },
        error: (err: any) => {
          this.toast.error(err?.error?.message);
        },
      });
  }
  get basicChildrenFormControl() {
    return this.formchild.controls;
  }
  get basicFamilyFormControl() {
    return this.formfamily.controls;
  }
  goNext(){
      this.stepper.next();
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
  getAliveStatusByLovCode(): void {
    this.LovServ.getLevelByCode(LovCode.ALIVE_STATUS).subscribe({
      next: (result) => {
        debugger;
        this.aliveList = result.data;
        this.fatherAlivelList = result.data;
        this.motherAliveList = result.data;
        this.spouseAliveList = result.data;
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  getChildrenByEmployeeId(){
    this.employeeService.getChildrenByEmployeeId(this.employeeId).subscribe({
      next: result => {
        this.childrenList = result.data;
      },
      error: (err: any) => { this.toast.error(err?.error?.message) },
    });
  }
  getFamilyByEmployeeId(){
    this.employeeService.getFamilyByEmployeeId(this.employeeId).subscribe({
      next: result => {
        debugger;
       // this.childrenList = result.data;
       if(result.data.length>0){
        this.formfamily.controls['SpouseAliveStatusId'].setValue(result.data[0].spouseAliveStatusId);
        this.formfamily.controls['EmergencyContact'].setValue(result.data[0].emergencyContact);
this.formfamily.controls['EmergencyContactName'].setValue(result.data[0].emergencyContactName);
this.formfamily.controls['EmployeeId'].setValue(result.data[0].employeeId);
this.formfamily.controls['FamilyId'].setValue(result.data[0].familyId);
this.formfamily.controls['FatherAliveStatusId'].setValue(result.data[0].fatherAliveStatusId);
this.formfamily.controls['FatherContact'].setValue(result.data[0].fatherContact);
this.formfamily.controls['MaritalStatusId'].setValue(result.data[0].maritalStatusId);
this.MaritalStatusId=result.data[0].maritalStatusId;
this.selectedMaritalStatus=this.maritalList.find(obj => obj.id === result.data[0].maritalStatusId);
this.formfamily.controls['MotherAliveStatusId'].setValue(result.data[0].motherAliveStatusId);
this.formfamily.controls['MotherContact'].setValue(result.data[0].motherContact);
this.formfamily.controls['NameOfFather'].setValue(result.data[0].nameOfFather);
this.formfamily.controls['NameOfMother'].setValue(result.data[0].nameOfMother);
this.formfamily.controls['NameOfSpouse'].setValue(result.data[0].nameOfSpouse);
this.formfamily.controls['NoOfBrothers'].setValue(result.data[0].noOfBrothers);
this.formfamily.controls['NoOfDependents'].setValue(result.data[0].noOfDependents);
this.formfamily.controls['NoOfSisters'].setValue(result.data[0].noOfSisters);
let FormateDOB = this.datePipe.transform(result.data[0]?.spouseDateOfBirth, 'yyyy-MM-dd');
let splitDOB: any = FormateDOB?.split('-');
if (Array.isArray(splitDOB)) {
  this.dateofbirthPicker = {
    day: Number(splitDOB[2]),
    month: Number(splitDOB[1]),
    year: Number(splitDOB[0]),
  };
}
       }
      },
      error: (err: any) => { this.toast.error(err?.error?.message) },
    });
  }
  Edit(item:any){
    debugger;
    this.formchild.controls['EmployeeId'].setValue(item.employeeId);
    this.formchild.controls['NameOfChild'].setValue(item.nameOfChild);
    this.formchild.controls['ChildGenderId'].setValue(item.childGenderId);
    //this.formchild.controls['ChildDateOfBirth'].setValue(item.childDateOfBirth);
    let FormateDOB = this.datePipe.transform(item?.childDateOfBirth, 'yyyy-MM-dd');
    let splitDOB: any = FormateDOB?.split('-');
    if (Array.isArray(splitDOB)) {
      this.childdateofbirthPicker = {
        day: Number(splitDOB[2]),
        month: Number(splitDOB[1]),
        year: Number(splitDOB[0]),
      };
    }
    this.formchild.controls['ChildrenId'].setValue(item.childrenId);
  }
  ClearChildrenForm(){
    this.formchild.controls['EmployeeId'].setValue('');
    this.formchild.controls['NameOfChild'].setValue('');
    this.formchild.controls['ChildGenderId'].setValue('');
    this.formchild.controls['ChildDateOfBirth'].setValue('');
  }
}
