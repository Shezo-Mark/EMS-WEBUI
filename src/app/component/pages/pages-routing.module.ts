import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        title: 'Adminor - profile',
        component: ProfileComponent,
      },
      {
        path: 'edit-profile',
        title: ' Adminor - edit-profile',
        component: EditProfileComponent,
      },
      {
        path: 'about-us',
        title: 'Adminor - about-us',
        component: AboutUsComponent,
      },
      {
        path: 'company-history',
        title: 'Adminor - company-history',
        component: CompanyHistoryComponent,
      },
      { path: 'crypto', title: 'Adminor - crypto', component: CryptoComponent },
      {
        path: 'terms-condition',
        title: 'Adminor - terms-conditions',
        component: TermsConditionsComponent,
      },
      {
        path: 'settings',
        title: 'Adminor - settings',
        component: SettingsComponent,
      },
      {
        path: 'invoice',
        title: 'Adminor - invoice',
        component: InvoiceComponent,
      },
      {
        path: 'pricing',
        title: 'Adminor - pricing',
        component: PricingComponent,
      },
      { path: 'panel', title: 'Adminor - panel', component: PannelComponent },
      {
        path: 'gallery',
        title: 'Adminor - gallery',
        component: GalleryComponent,
      },
      { path: 'Todotask', title: 'Todotask', component: TodotaskComponent },
      {
        path: 'switcher-1',
        title: 'Adminor - switcher-1',
        component: SwitcherOneComponent,
      },
      {
        path: 'empty-page',
        title: 'Adminor - empty-page',
        component: EmptyPageComponent,
      },
      { path: 'faqs', title: 'Adminor - faqs', component: FaqsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
