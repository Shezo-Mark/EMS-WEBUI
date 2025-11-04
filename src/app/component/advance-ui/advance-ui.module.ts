import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceUiRoutingModule } from './advance-ui-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ModalComponent } from './modal/modal.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { RatingsComponent } from './ratings/ratings.component';
import { CountersComponent } from './counters/counters.component';
import { SearchComponent } from './search/search.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogPagesModule } from './blog-pages/blog-pages.module';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CdTimerModule } from 'angular-cd-timer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';



@NgModule({
  declarations: [
    AccordionComponent,
    CarouselComponent,
    CollapseComponent,
    ModalComponent,
    SweetAlertComponent,
    RatingsComponent,
    CountersComponent,
    SearchComponent,
    UserlistComponent,
  ],
  imports: [
    CommonModule,
    AdvanceUiRoutingModule,
    SharedModule,
    BlogPagesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GalleryModule,
    LightboxModule,
    SweetAlert2Module.forRoot(),
    CdTimerModule,
    BarRatingModule,
    NgbNavModule,
    
  ],
})
export class AdvanceUiModule {}
