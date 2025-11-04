import {  CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { CardsComponent } from './cards/cards.component';
import { ContentScrollbarComponent } from './content-scrollbar/content-scrollbar.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ImagesComparsionComponent } from './images-compare/images-comparsion.component';
import { NotificationComponent } from './notification/notification.component';
import { WidgetNotificationComponent } from './widget-notification/widget-notification.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { WidgetsComponent } from './widgets/widgets.component';
//import { MapLeafletComponent } from './map-leaflet/map-leaflet.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MailModule } from './mail/mail.module';
import { FileManagerModule } from './file-manager/file-manager.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
//import { LeafletModule } from '@asymmetrik/ngx-leaflet';
 
import { ToastrModule } from 'ngx-toastr';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GalleryModule } from 'ng-gallery';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    CardsComponent,
    ContentScrollbarComponent,
    
    RangeSliderComponent,
    CalendarComponent,
    ContactsComponent,
    ImagesComparsionComponent,
    NotificationComponent,
    WidgetNotificationComponent,
    TreeviewComponent,
    WidgetsComponent,
    //MapLeafletComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    SharedModule,
    MailModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FileManagerModule,
    NgScrollbarModule,
    MatSnackBarModule,
    MatInputModule,
   MatFormFieldModule,
    NgxSliderModule,
    //LeafletModule,
    ToastrModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    GalleryModule,
    CarouselModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppsModule {}
