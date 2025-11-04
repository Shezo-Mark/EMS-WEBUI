import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/app/authentication/login-page/login-page.component';
import { RegisterComponent } from 'src/app/authentication/register/register.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login-page/login-page.module').then(
            (m) => m.LoginPageModule
          ),

      },
      { path: 'register', component: RegisterComponent },
      { path: 'accessdenied', component: ErrorpageComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AuthenticationRoutingModule { }
