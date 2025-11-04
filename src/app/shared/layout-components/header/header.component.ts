import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LayoutService } from '../../services/layout.service';
import { Menu, NavService } from 'src/app/shared/services/nav.service';
import { SwitcherService } from 'src/app/shared/services/switcher.service';
import { AuthService } from '../../security/auth-service.service';
import { UserModel } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { FilePathEnum } from '../../Enum/documentTableName-enum';
import { StudentService } from 'src/app/domain/services/student.service';
import { ConfigService } from '../../services/config.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from '../../services/http-request.service';
import { el } from 'date-fns/locale';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userDetails: any
  public isCollapsed = true;
  isSubmitted:boolean = false;
  studentDetails:any;
  baseUrl:any = this.configService.baseApiUrl;
  FilePath:any = FilePathEnum;
  changepasswordformown: FormGroup;
  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
    public modalService: NgbModal,
    public SwitcherService: SwitcherService,
    public router: Router,private authService: AuthService,
    public studentService:StudentService,
    private configService:ConfigService,
    private fb: FormBuilder,
    private http: HttpRequestService,
    private toast: ToastrService,
  ) {
    this.changepasswordformown = this.fb.group({
      UserId: 0,
      OldPassword: ["", Validators.required],
      NewPassword: ["", Validators.required],
      ConfirmPassword: ["", Validators.required]
    });
    this.changepasswordformown.valueChanges.subscribe(a => {
      if (a.NewPassword !== a.ConfirmPassword) {
        this.changepasswordformown.controls['ConfirmPassword'].setErrors({ 'mismatch': true });
      } else {
        this.changepasswordformown.controls['ConfirmPassword'].setErrors(null);
      }
    });
    //this.userDetails = this.authService.getUserDetails();
  }
  get basicFormControl() {
    return this.changepasswordformown.controls;
  }
  ngOnInit(): void {}
  onBlurEvent() {
      this.http.post('authentication/CheckUser', { 'Email': this.userDetails.user.email, 'Password': this.changepasswordformown.controls['OldPassword'].value }).subscribe({
      next: data => {
        if(data.status){
          this.changepasswordformown.controls['OldPassword'].setErrors(null);
        }
        else{this.changepasswordformown.controls['OldPassword'].setErrors({ 'Invalid': true });}
      },
      error: (err: any) => {
        
      },
    });
  }
  SubmitPassword() {
    this.isSubmitted = true;
    if (!this.changepasswordformown.valid)
      return;
    this.http.post('authentication/ChangePassword', { 'Email': this.userDetails.user.email, 'Password': this.changepasswordformown.controls['NewPassword'].value }).subscribe({
    next: data => {
      if(data.status){
        this.changepasswordformown.reset();
        this.modalService.dismissAll();
        this.toast.success(data.message);
      }
    },
    error: (err: any) => {
      
    },
  });
}
  SubmitPassword1() {

    //userId
    // this.UserInfo = this.http.getUserDetails();
     this.isSubmitted = true;
    // if (!this.changepasswordformown.valid)
    //   return;
    // this.working = true;
    // this.http.postJSON('api/Users/ChangePassword', { userId: this.UserInfo.userId, Password: this.NewPassword.value }).subscribe((d: any) => {

    //   if (d.success == true) {
    //     this.changepasswordformown.reset();
    //     this.modalService.dismissAll();
    //     this.toastr.success("Password Changed successfully");
    //     this.working = false
    //   }
    //   else {
    //     this.toastr.error("Password not Changed");
    //   }
    // }, (error) => {
    //   this.error = error.error;
    //   this.toastr.error(error.error);
    // });

  }
  toggleSidebar() {
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('body')?.classList.toggle('sidenav-toggled');
    }
  }

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
    document.querySelector('body')?.classList.remove('sidenav-toggled-open');
  }
 logout(){
  this.authService.logout();
 }
 openScrollableContent(ScroleContent: any) {
  this.modalService.open(ScroleContent, { size: 'lg' });
}
openModal(ScroleContent: any) {
  this.modalService.open(ScroleContent, { size: 'sm' });
}

}
