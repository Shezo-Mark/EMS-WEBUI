import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPagesRoutingModule } from './custom-pages-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { Error401Component } from './error401/error401.component';
import { Error403Component } from './error403/error403.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { Error503Component } from './error503/error503.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
        RegisterComponent,
        LockscreenComponent,
        UnderConstructionComponent,
        Error401Component,
        Error403Component,
        Error404Component,
        Error500Component,
        Error503Component
    ],
    imports: [
        CommonModule,
        CustomPagesRoutingModule,
        SharedModule
    ]
})
export class CustomPagesModule { }
