import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';
import { WYSIWYAGEDITORComponent } from './wysiwyag-editor/wysiwyag-editor.component';
import { FormSizesComponent } from './form-sizes/form-sizes.component';
import { SharedModule } from "../../shared/shared.module";
import { NgxColorsModule } from 'ngx-colors';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { ArchwizardModule } from 'angular-archwizard';
import { BasicContentComponent } from './form-wizards/basic-content/basic-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    FormElementsComponent,
    AdvancedFormsComponent,
    FormLayoutsComponent,
    FormValidationComponent,
    FormWizardsComponent,
    WYSIWYAGEDITORComponent,
    FormSizesComponent,
    BasicContentComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    NgxColorsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2TelInputModule,
    NgSelectModule,
    MatStepperModule,
    MatFormFieldModule,
    ArchwizardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    AngularEditorModule,
    NgxDropzoneModule,
    NgxEditorModule,
  ],
})
export class FormModule {}
