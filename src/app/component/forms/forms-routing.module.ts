import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';
import { WYSIWYAGEDITORComponent } from './wysiwyag-editor/wysiwyag-editor.component';
import { FormSizesComponent } from './form-sizes/form-sizes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form-elements',
        title: 'Adminor - form-elements',
        component: FormElementsComponent,
      },
      {
        path: 'advanced-forms',
        title: 'Adminor - advanced-forms',
        component: AdvancedFormsComponent,
      },
      {
        path: 'form-layouts',
        title: 'Adminor - form-layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'form-validation',
        title: 'Adminor - form-validation',
        component: FormValidationComponent,
      },
      {
        path: 'form-wizards',
        title: 'Adminor - form-wizards',
        component: FormWizardsComponent,
      },
      {
        path: 'form-editors',
        title: 'Adminor - form-editors',
        component: WYSIWYAGEDITORComponent,
      },
      {
        path: 'form-sizes',
        title: 'Adminor - form-sizes',
        component: FormSizesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
