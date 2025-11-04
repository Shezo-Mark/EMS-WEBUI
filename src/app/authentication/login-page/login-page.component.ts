import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/security/auth-service.service';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public showPassword: boolean = false;
  projectTitle: string = this.configService?.projectTitle;
  disabled = '';
  active: any;
  loginForm: FormGroup;
  isSubmitted = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder, private http: HttpRequestService, private toast: ToastrService,
    private auths: AuthService,
    private configService: ConfigService
  ) {
    this.loginForm = this.formBuilder.group({
      Email: ["", Validators.required],
      Password: ["", Validators.required],
    });
  }

  ngOnInit(): void {
  }
  get basicFormControl() {
    return this.loginForm.controls;
  }
  login() {
    
    this.isSubmitted = true;
    if (!this.loginForm.valid)
      return;

//     this.router.navigate(['register/employee']);
// return;
    this.http.post('authentication/login', this.loginForm.value).subscribe({
      next: (result: any) => {
        if (result.status) {
          let user = result.data.user;
          this.auths.setCredntial(result.data, true);
          localStorage.setItem(environment.BranchId, btoa(JSON.stringify(user.branchId)));
          this.router.navigate([user.defaultUrl]);
        }
        else this.toast.error("Invaild User Name OR Password")
      },
      error: (err: any) => { this.toast.error(err.message) },
    });
  }
}
