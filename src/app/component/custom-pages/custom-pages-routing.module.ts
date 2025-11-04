import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error401Component } from './error401/error401.component';
import { Error403Component } from './error403/error403.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { Error503Component } from './error503/error503.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'error401',
        title: 'Adminor - ERROR 401',
        component: Error401Component,
      },
      {
        path: 'error403',
        title: 'Adminor - ERROR 403',
        component: Error403Component,
      },
      {
        path: 'error404',
        title: 'Adminor - ERROR 404',
        component: Error404Component,
      },
      {
        path: 'error500',
        title: 'Adminor - ERROR 500',
        component: Error500Component,
      },
      {
        path: 'error503',
        title: 'Adminor - ERROR 503',
        component: Error503Component,
      },
      {
        path: 'underconstruction',
        title: 'Adminor - Under Construction',
        component: UnderConstructionComponent,
      },
      {
        path: 'forgot-password',
        title: 'Adminor - Forgot Password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'lockscreen',
        title: 'Adminor - Lockscreen',
        component: LockscreenComponent,
      },
      { path: 'login', title: 'Adminor - Login', component: LoginComponent },
      {
        path: 'register',
        title: 'Adminor - Register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPagesRoutingModule { }
