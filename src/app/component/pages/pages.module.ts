import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompanyHistoryComponent } from './company-history/company-history.component';
import { CryptoComponent } from './crypto/crypto.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { SettingsComponent } from './settings/settings.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { PannelComponent } from './pannel/pannel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TodotaskComponent } from './todotask/todotask.component';
import { FaqsComponent } from './faqs/faqs.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { SwitcherOneComponent } from './switcher-one/switcher-one.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TablesModule } from './tables/tables.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { NgxColorsModule } from 'ngx-colors';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    AboutUsComponent,
    CompanyHistoryComponent,
    CryptoComponent,
    TermsConditionsComponent,
    SettingsComponent,
    InvoiceComponent,
    PricingComponent,
    PannelComponent,
    GalleryComponent,
    TodotaskComponent,
    FaqsComponent,
    EmptyPageComponent,
    SwitcherOneComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    TablesModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    GalleryModule,
    LightboxModule,
    NgxColorsModule,
    CarouselModule,
  ],
})
export class PagesModule {}
