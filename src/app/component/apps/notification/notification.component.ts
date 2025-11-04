import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  durationInSeconds = 5;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private toastr: ToastrService, private _snackBar: MatSnackBar) {}

  //POSITION NOTIFICATION
  showDefault() {
    this.toastr.info('Wellcome To Adminor', 'Info', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }
  showCenter() {
    this.toastr.success('Details Successfully Uploaded', 'Success', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }
  showLeft() {
    this.toastr.info('Details Successfully Uploaded', 'Success', {
      timeOut: 3000,
      positionClass: 'toast-top-left',
    });
  }
  showCenterInfo() {
    this.toastr.info('Some Info Is Here', 'Info', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }
  showCenterError() {
    this.toastr.error('Oops! An Error Occurred', 'Error', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }
  showCenterWarning() {
    this.toastr.warning('Something Went Wrong', 'Warning', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }
  /// NOTIFICATION TYPES
  showPrimary() {
    this.toastr.info('Wellcome to Adminor', 'Info', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }
  showSuccess() {
    this.toastr.success('Details Successfully Uploaded', 'Success', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }
  showError() {
    this.toastr.error('Oops! An Error Occurred ', 'Error', {
      timeOut: 3000,
      positionClass: 'toast-top-left',
    });
  }
  showWarning() {
    this.toastr.warning('Something Went Wrong', 'Warning', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }
  showInfo() {
    this.toastr.info('Some Info Here', 'Info', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }
  showFixedError() {
    this.toastr.error('This Error Stay Here Until you click It', 'Error', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }

  //NOTIFICATION STYLES
  openSnackBarCustom() {
    this._snackBar.openFromComponent(BasciSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  //NO
}

@Component({
  selector: 'snack-bar-component',
  template: `<span class="basicSnackbar"> Basic Snackbar Notification </span>`,
  styles: [],
})
export class BasciSnackbarComponent {}
