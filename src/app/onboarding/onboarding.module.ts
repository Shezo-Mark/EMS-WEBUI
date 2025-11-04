import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { OnBoardingRoutingModule } from './onboarding-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    OnBoardingRoutingModule,
    SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgSelectModule,
        MatStepperModule,
        NgxDropzoneModule,
  ]
})
export class OnBoardingModule { }
