import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxColorsModule } from 'ngx-colors';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutService } from './shared/services/layout.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthInterceptor } from './shared/security/auth.interceptor';
import { ConfigService } from './shared/services/config.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from './shared/shared.module';
import { JobDescriptionModule } from './job-description/job-description.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}
@NgModule({
  declarations: [AppComponent,  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxColorsModule,
    CommonModule,
    NgxSpinnerModule,
    PdfViewerModule,
    JobDescriptionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true
    },
    LayoutService,
    ToastrService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
