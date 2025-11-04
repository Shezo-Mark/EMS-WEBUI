import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RegisterComponent,
    ErrorpageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
