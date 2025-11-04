import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay, Observable } from 'rxjs';
import { AuthService } from './shared/security/auth-service.service';
import { ConfigService } from './shared/services/config.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Digital Omega';
  processing: boolean | undefined;
  Loading: Observable<boolean>;
  constructor(auth: AuthService, private spinner: NgxSpinnerService, private router: Router) {
    this.Loading = auth.isLoading;
    this.Loading.pipe(delay(0)).subscribe((loading: boolean) => {
      this.processing = loading;
      if (this.processing)
        this.spinner.show();
      else
        this.spinner.hide();
    });
    this.router.events
    .subscribe({
      next: (event:any) => {
        
        this.navigationInterceptor(event);
      },
      error: (err: any) => {  this.spinner.hide(); },
    });
    
  }
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.spinner.show();
    }
    if (event instanceof NavigationEnd) {
      this.spinner.hide();
    }
    if (event instanceof NavigationCancel) {
      this.spinner.hide();
    }
    if (event instanceof NavigationError) {
      this.spinner.hide();
    }
  }
}
