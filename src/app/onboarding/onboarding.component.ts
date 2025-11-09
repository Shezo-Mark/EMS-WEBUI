import { DatePipe } from '@angular/common';


import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AreaService } from 'src/app/domain/services/area.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { ConfigService } from 'src/app/shared/services/config.service';
import { v4 as uuidv4 } from 'uuid';
import { paginationEnum } from '../shared/Enum/paginationEnum';
import { OnboardingService } from '../domain/services/onboarding.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  providers: [DatePipe,AreaService],
})

export class OnboardingComponent implements OnInit {
  onboardingId: any;
  url: string | ArrayBuffer | null | undefined;
  urlAttachment!: string | ArrayBuffer | null;
  @ViewChild('stepper') stepper!: MatStepper;


  registrationForm!: FormGroup;
  parentRegistrationForm!: FormGroup;
  submitted = false;
  isEdit = false;
  contractDatePicker: { day?: number; month: number; year: number };
  onboardingStartDatePicker: { day?: number; month: number; year: number };
  curdBtnIsList: boolean = true;
  searchText: string = '';
  pagination: any = paginationEnum;
  baseUrl: any = this.configService.baseApiUrl;
  working:boolean=false;
  onboardingList: any[]=[];
  onboardingDetails: any={};
  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly cb: FormBuilder,
    private readonly toast: ToastrService,
    private readonly modalService: NgbModal,
    private readonly onboardingService: OnboardingService,
    private readonly common: CommonService,
    public readonly configService: ConfigService
  ) {
    this.registrationForm = this.fb.group({
      OnboardingId: uuidv4(),
        ClientId: ['',Validators.required],
      CompanyName: ['', Validators.required],
        ContactPersonInfo: this.fb.array([this.createContactPersonNameGroup()]), // One row by default
      //Designation: ['', Validators.required],
      //ContactPhoneNumber:['', Validators.required],
      //ContactEmailAddress: ['', [Validators.pattern(this.common.emailPatteren)]], //Validators.required,
      ClientType: ['', Validators.required],
       ContractDate: ['', Validators.required],
      OnboardingStartDate: ['', Validators.required],
      NumberOfEmployee: ['', Validators.required],
      ServicesRequired: ['', Validators.required],
      SpecialRequirmentOrNotes: ['', Validators.required],
      CompanyAddress: [''],
      IsActive: [true],
      IsDeleted: [false],
    });
    const today = new Date();

    this.onboardingStartDatePicker = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    };
      this.contractDatePicker = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    };
   // this.common.generateRandomCode(6)
    // this.registrationForm.controls['EmployeeCode'].setValue(
    //   'EMP-01'
    // );
  }
createContactPersonNameGroup(): FormGroup {
  return this.fb.group({
    name: ['', Validators.required],
     Designation: ['', Validators.required],
      ContactEmailAddress: ['', [Validators.pattern(this.common.emailPatteren)]],
       ContactPhoneNumber: ['', Validators.required],
       // or use fullName / contactName if needed
  });
}
addContactPersonName(): void {
  this.contactPersonInfoArray.push(this.createContactPersonNameGroup());
}

removeContactPersonName(index: number): void {
  if (this.contactPersonInfoArray.length > 1) {
    this.contactPersonInfoArray.removeAt(index);
  }
}
get contactPersonInfoArray(): FormArray {
  return this.registrationForm.get('ContactPersonInfo') as FormArray;
}
  get basicFormControl() {
    return this.registrationForm.controls;
  }
  changeCurdView(bitVal: boolean) {
    this.curdBtnIsList = bitVal;
    this.isEdit = false;
  }
  onPageChange(event: any) {
    this.pagination.pageNo = event;
    this.getonboardings();
  }
  onSearchText() {
    this.pagination.pageNo = 1;
    this.pagination.pageSize = 10;
    this.getonboardings();
  }
  ngOnInit(): void {
    this.getonboardings();
     this.getClientCode();

    this.onboardingId = this.route.snapshot.queryParamMap.get('id');
    if (this.onboardingId != null && this.onboardingId != '') {
      this.isEdit = true;
     // this.getEmployeeById(this.employeeId);

    }else{
      this.isEdit=false;

    }

   // if(!this.isEdit)
    // this.getEmployeeCode();
    //  this.getGenderByLovCode();
    //  this.getgroups();

    //this.getdepartments();
   // this.getfunctions();
    // this.getlevels();
    //  this.getEmployeeDesignationByLovCode();
    //  this.getMaritalStatusByLovCode();
    //  this.getEmployeeTypeByLovCode();
    //  this.getEmploymentTypeByLovCode();
    //  this.getjobDescriptions();
  }
  getonboardings() {

    this.onboardingService.getOnboardings(this.pagination.pageNo,this.pagination.pageSize,this.searchText).subscribe({
      next: result => {
        debugger
        this.onboardingList=[];
        this.onboardingList = result.data;
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
   getClientCode(): void {
    this.onboardingService.getClientCode().subscribe({
      next: (result) => {
        this.registrationForm.controls['ClientId'].setValue(result.data);
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  getOnboardingById(onboardingId: string) {
    this.onboardingService.getOnboardingById(onboardingId).subscribe({
      next: (result) => {
        this.onboardingDetails = result.data;
        this.setRegistrationValuesForupdate(this.onboardingDetails);
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  setRegistrationValuesForupdate(item: any) {
    debugger
    this.curdBtnIsList = false;
    this.isEdit = true;
    this.registrationForm.controls['OnboardingId'].setValue(item.onboardingId);
    this.registrationForm.controls['ClientId'].setValue(item.clientId);

    this.registrationForm.controls['CompanyName'].setValue(item.companyName);
    if(item.contactPersonInfo){
 const contactNames = JSON.parse(item.contactPersonInfo) as {
  name: string;
  Designation: string;
  ContactEmailAddress: string;
  ContactPhoneNumber: string;
}[];
const contactArray = this.registrationForm.get('ContactPersonInfo') as FormArray;
// Clear existing controls
contactArray.clear();
// Add one FormGroup per name
contactNames.forEach(contactPersonInfo => {
  contactArray.push(this.fb.group({
    name: [contactPersonInfo.name, Validators.required],
    Designation: [contactPersonInfo.Designation, Validators.required],
    ContactEmailAddress: [contactPersonInfo.ContactEmailAddress, [Validators.pattern(this.common.emailPatteren)]],
    ContactPhoneNumber: [contactPersonInfo.ContactPhoneNumber, Validators.required],
  }));
});


    }
    // this.registrationForm.controls['ContactEmailAddress'].setValue(item.contactEmailAddress);
    // this.registrationForm.controls['ContactPhoneNumber'].setValue(item.contactPhoneNumber);


    this.registrationForm.controls['ClientType'].setValue(item.clientType);
    this.registrationForm.controls['CompanyAddress'].setValue(item.companyAddress);
    if(item.numberOfEmployees != null && item.numberOfEmployees != undefined)
    this.registrationForm.controls['NumberOfEmployees'].setValue(item.numberOfEmployees);
    if(item.servicesRequired != null && item.servicesRequired != undefined)
    this.registrationForm.controls['ServicesRequired'].setValue(JSON.parse(item.servicesRequired));
  this.registrationForm.controls['ContractDate'].setValue(item.contractDate);
    this.registrationForm.controls['OnboardingStartDate'].setValue(item.onboardingStartDate);

    this.registrationForm.controls['SpeccialRequirementsOrNotes'].setValue(item.speccialRequirementsOrNotes);




    this.registrationForm.controls['IsActive'].setValue(item.isActive);

  }



  IsActive(row: any) {
    this.onboardingService.active(row.onboardingId).subscribe({
      next: result => {
        if (result.status) {
          this.getonboardings();
          this.toast.success("Record Active OR InActive SuccessFully");
        }
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
   onDelete(onboardingId: string) {
    this.onboardingService.delete(onboardingId).subscribe({
      next: () => {
        debugger
        this.toast.success('Deleted successfully');
        this.getonboardings();
      },
      error: () => {
        this.toast.error('Delete failed');
      }
    });
  }




  onRemove() {
    this.url = null;
    this.registrationForm.controls['Base64'].setValue('');
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

    // if(this.RenewPicker!=null || this.RenewPicker!=undefined){
    //   let RenewPicker = this.RenewPicker.year + '-' + this.RenewPicker.month + '-' + this.RenewPicker.day;
    //   this.registrationForm.value['RenewDate'] = RenewPicker;
    // }
    // let OnboardingStartDate =
    //   this.onboardingStartDatePicker.year +
    //   '-' +
    //   this.onboardingStartDatePicker.month +
    //   '-' +
    //   this.onboardingStartDatePicker.day;
       let ContractDate =
  this.contractDatePicker.year +
  '-' +
  String(this.contractDatePicker.month).padStart(2, '0') +
  '-' +
  String(this.contractDatePicker.day).padStart(2, '0');

    this.registrationForm.value['ContractDate'] = ContractDate;

    let OnboardingStartDate =
  this.onboardingStartDatePicker.year +
  '-' +
  String(this.onboardingStartDatePicker.month).padStart(2, '0') +
  '-' +
  String(this.onboardingStartDatePicker.day).padStart(2, '0');

    this.registrationForm.value['OnboardingStartDate'] = OnboardingStartDate;

     debugger;

     const personArray = this.registrationForm.get('ContactPersonInfo') as FormArray;
    const contactPersonInfo = personArray.controls.map(person => ({
  name: person.get('name')?.value,
  Designation: person.get('Designation')?.value,
  ContactEmailAddress: person.get('ContactEmailAddress')?.value,
   ContactPhoneNumber: person.get('ContactPhoneNumber')?.value
}));

this.registrationForm.value['ContactPersonInfo'] = JSON.stringify(contactPersonInfo);
this.registrationForm.value['ServicesRequired'] = JSON.stringify(this.registrationForm.value['ServicesRequired']);
    this.onboardingService.saveUpdate(this.registrationForm.value).subscribe({
      next: (result: any) => {
        if (result) {
          this.onboardingId = result.data;
          this.curdBtnIsList = true;
          this.isEdit = false;
             this.getClientCode();
          this.toast.success("Your details have been saved.");
        } else this.toast.error('Somethings went wrong...');
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }

  getFormattedData(data: string): any[] {
  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      return parsed.filter(item => item !== null);
    }
  } catch (error) {
    console.error('Invalid JSON:', data);
  }
  return [];
}
}
