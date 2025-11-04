import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';
import { PageHeaderComponent } from '../shared/layout-components/page-header/page-header.component';
import { EmployeeRegistrationRoutingModule } from './employee-registration-routing.module';
import { PreviousExperienceDetailsComponent } from './previous-experience-details/previous-experience-detailsprevious-school-details.component';
import { EducationalDetailsComponent } from './educational-details/educational-detailsparent-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MaritalDetailsComponent } from './marital-details/marital-details.component';
import { AceessriesComponent } from './aceessries/aceessries.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    PreviousExperienceDetailsComponent,
    EducationalDetailsComponent,
    EmployeeListComponent,
    MaritalDetailsComponent,
    AceessriesComponent
  ],
  imports: [
    CommonModule,
    EmployeeRegistrationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    MatStepperModule,
    NgxDropzoneModule,
  ],
  exports: []
})
export class EmployeeRegistrationModule { }
