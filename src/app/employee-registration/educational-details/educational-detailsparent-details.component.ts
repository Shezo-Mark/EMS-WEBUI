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
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.scss'],
})
export class EducationalDetailsComponent {
  @Input() employeeId: any = '';
  form:FormGroup;
  submitted = false;
  @ViewChild('stepper') stepper!: MatStepper;
  educationList :any[] = []
  EducationTypeId:any;
  educationTypesList: any[]=[];
  selectedEducationType: any={};
  constructor(
    private readonly fb: FormBuilder,
    private readonly toast: ToastrService,
    private readonly http: HttpRequestService, 
    private readonly studentService: StudentService,
    private readonly employeeService: EmployeeService,
    private readonly LovServ:LovService,
    private readonly commonService: CommonService
  ) {
    this.form = this.fb.group({
      EducationId: uuidv4(),
      EducationTypeId:['',Validators.required],
      EmployeeId: ['', Validators.required],
      NameOfHighestDegree: ['', Validators.required],
      NameOfInstitute: ['', Validators.required],
      PassingYear: ['']
     
    });
  }
  ngOnInit(): void {
    this.getEducationTypeByLovCode();
    if (this.employeeId != '' && this.employeeId != null) {
      this.getEmployeeById();
    this.getEducationByEmployeeId();
    }
  }
  SaveInformal(){
    this.employeeService.SaveEducationType(this.employeeId,this.selectedEducationType?.id).subscribe({
      next: (result) => {
debugger;
        if(result.data){
          
        }
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  getEmployeeById() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe({
      next: (result) => {

        if(result.data.educationTypeId){
          this.selectedEducationType=this.educationTypesList.find(obj => obj.id === result.data.educationTypeId);
          this.EducationTypeId=result.data.educationTypeId;
        }
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  getEducationTypeByLovCode(): void {
    this.LovServ.getLevelByCode(LovCode.EDUCATION_TYPE).subscribe({
      next: (result) => {
        this.educationTypesList = result.data;
      },
      error: (err: any) => {
        this.toast.error(err?.error?.message);
      },
    });
  }
  onSelectChange(selectedValue:any) {
    debugger;
    this.selectedEducationType = selectedValue; // Assuming you want the id of the selected item
  }
  ParentFormSubmit() {
    debugger;
    if (this.employeeId == '' || this.employeeId == null) {
      this.toast.error('Please Edit employee first'); 
      return;
    }
    this.form.controls['EmployeeId'].setValue(this.employeeId);
    this.form.controls['EducationTypeId'].setValue(this.selectedEducationType.id);
    this.submitted = true;
    if (!this.form.valid) return;
    this.http
      .post('employee/update-education', this.form.value)
      .subscribe({
        next: (result) => {
          if (result) {
            this.toast.success(result.message);
            //this.form.controls['EducationId'].setValue(uuidv4());
           // this.ClearForm();
            this.getEducationByEmployeeId();
            // this.stepper.next();
            // return;
          } else this.toast.error('Somethings went wrong...');
        },
        error: (err: any) => {
          this.toast.error(err?.error?.message);
        },
      });
  }
  get basicFormControlEducation() {
    return this.form.controls;
  }
  goNext(){
      this.stepper.next();
  }
  getEducationByEmployeeId() {
    this.employeeService. getEducationByEmployeeId(this.employeeId).subscribe({
      next: result => {
        this.educationList = result.data;
        if(this.educationList.length>0){
          this.Edit(this.educationList[0])
        }
      },
      error: (err: any) => { this.toast.error(err?.error?.message) },
    });
  }
  Edit(item:any){
    this.form.controls['EducationId'].setValue(item.educationId);
    this.form.controls['EmployeeId'].setValue(item.employeeId);
    this.form.controls['NameOfHighestDegree'].setValue(item.nameOfHighestDegree);
    this.form.controls['NameOfInstitute'].setValue(item.nameOfInstitute);
    this.form.controls['PassingYear'].setValue(item.passingYear);

  }
  ClearForm(){
    this.form.controls['EducationId'].setValue('');
    this.form.controls['EmployeeId'].setValue('');
    this.form.controls['NameOfHighestDegree'].setValue('');
    this.form.controls['NameOfInstitute'].setValue('');
    this.form.controls['PassingYear'].setValue('');

  }
}
