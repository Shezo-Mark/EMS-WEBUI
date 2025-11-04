import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/domain/services/employee.service';
import { StudentService } from 'src/app/domain/services/student.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-previous-experience-details',
  templateUrl: './previous-experience-details.component.html',
  styleUrls: ['./previous-experience-details.component.scss']
})
export class PreviousExperienceDetailsComponent {
  @Input() employeeId:any = '';
  form: FormGroup;
 dateicker: { day?: number; month: number; year: number };
 submitted = false;
 previousExperienceList:any[]=[];
 constructor(
  private fb: FormBuilder,
  private toast: ToastrService,
  private readonly http: HttpRequestService,
  private router: Router,
  private studentService: StudentService,
  private readonly employeeService: EmployeeService,
  private datePipe: DatePipe,
) {
  this.form = this.fb.group({
    PreviousExperienceId :uuidv4(),
    EmployeeId:['', Validators.required] ,
    YearOfExperience: ['', Validators.required], 
    Industry : ['', Validators.required],
    PreviousEmployerAdress: ['', Validators.required],
    ReasonForLeaving: ['',Validators.required ],
    ReferenceName: ['',Validators.required ],
    Contact: ['',Validators.required ],
    Email: ['',Validators.required ],
  });
  const today = new Date();
  this.dateicker = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
  };

}
ngOnInit(): void {
  if(this.employeeId != "" && this.employeeId != null){
    this.getExperienceoByEmployeeId();
  }
}
getExperienceoByEmployeeId() {
  this.employeeService.getExperienceoByEmployeeId(this.employeeId).subscribe({
    next: result => {
      this.previousExperienceList = result.data;
    },
    error: (err: any) => { this.toast.error(err?.error?.message) },
  });
}
Edit(item:any){
  this.form.controls['PreviousExperienceId'].setValue(item.previousExperienceId);
  this.form.controls['EmployeeId'].setValue(item.employeeId);
  this.form.controls['YearOfExperience'].setValue(item.yearOfExperience);
  this.form.controls['Industry'].setValue(item.industry);
  this.form.controls['PreviousEmployerAdress'].setValue(item.previousEmployerAdress);
  this.form.controls['ReasonForLeaving'].setValue(item.reasonForLeaving);
  this.form.controls['ReferenceName'].setValue(item.referenceName);
  this.form.controls['Contact'].setValue(item.contact);
  this.form.controls['Email'].setValue(item.email);
}
ClearForm(){
  this.form.controls['YearOfExperience'].setValue('');
  this.form.controls['Industry'].setValue('');
  this.form.controls['PreviousEmployerAdress'].setValue('');
  this.form.controls['ReasonForLeaving'].setValue('');
  this.form.controls['ReferenceName'].setValue('');
  this.form.controls['Contact'].setValue('');
  this.form.controls['Email'].setValue('');

}
get basicFormControl() {
  return this.form.controls;
}
FormSubmit() {
  debugger;
  if(this.employeeId == "" || this.employeeId == null){
    this.toast.error("Please Edit employee first"); return;
  }
  this.form.controls['EmployeeId'].setValue(this.employeeId);
  this.submitted = true;
  if (!this.form.valid) return;

  this.http
  .post('employee/update-previous', this.form.value)
  .subscribe({
    next: (result) => {
      if (result) {
        this.toast.success(result.message);
        this.form.controls['PreviousExperienceId'].setValue(uuidv4());
        this.ClearForm();
        this.getExperienceoByEmployeeId();
        //        this.router.navigateByUrl('/register/employee').then(() => {
        //   window.location.reload();
        // });
        // return;
        // this.stepper.next();
        // return;
      } else this.toast.error('Somethings went wrong...');
    },
    error: (err: any) => {
      this.toast.error(err?.error?.message);
    },
  });
  // this.employeeService.updatePreviousExperience(this.form.value).subscribe({
  //   next: result => {
  //     if (result) {
  //       this.toast.success(result.message);
  //       this.router.navigateByUrl('/register/employee').then(() => {
  //         window.location.reload();
  //       });
  //       return;
  //     }
  //     else
  //       this.toast.error("Somethings went wrong...")
  //   },
  //   error: (err: any) => { this.toast.error(err?.error?.message) },
  // });
}

}
