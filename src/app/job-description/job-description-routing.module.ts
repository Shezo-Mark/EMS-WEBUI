import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JDComponent } from './jd/jd.component';
import { CvComponent } from './cv/cv.component';
import { CompanyListComponent } from './company-list/company-list.component';
const routes: Routes = [
  {
    path: 'jd',
    component: JDComponent,
   // canActivate: [AuthGuardService]
  },
   { path: 'jobdescription/:id', component: JDComponent },
  { path: 'company', component:  CompanyListComponent}, 
  { path: 'cv', component: CvComponent },             
  { path: 'cv/:id', component: CvComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobDescriptionRoutingModule { }
