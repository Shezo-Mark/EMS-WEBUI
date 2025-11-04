import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { MaterialDesignIconsComponent } from './material-design-icons/material-design-icons.component';
import { SimpleLineIconsComponent } from './simple-line-icons/simple-line-icons.component';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { IonicIconsComponent } from './ionic-icons/ionic-icons.component';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { Pe7IconsComponent } from './pe7-icons/pe7-icons.component';
import { ThemifyIconsComponent } from './themify-icons/themify-icons.component';
import { TypiconsIconsComponent } from './typicons-icons/typicons-icons.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';
import { BootstrapIconsComponent } from './bootstrap-icons/bootstrap-icons.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'font-awesome',
        title: 'Adminor - font-awesome',
        component: FontAwesomeComponent,
      },
      {
        path: 'materialdesign-icons',
        title: 'Adminor - materialdesign-icons',
        component: MaterialDesignIconsComponent,
      },
      {
        path: 'simpleline-icons',
        title: 'Adminor - simple-line-icons',
        component: SimpleLineIconsComponent,
      },
      {
        path: 'feather-icons',
        title: 'Adminor - feather-icons',
        component: FeatherIconsComponent,
      },
      {
        path: 'Ionic-Icons',
        title: 'Adminor - Ionic-Icons',
        component: IonicIconsComponent,
      },
      {
        path: 'flag-icons',
        title: 'Adminor - flag-icons',
        component: FlagIconsComponent,
      },
      {
        path: 'pe7-icons',
        title: 'Adminor - pe7-icons',
        component: Pe7IconsComponent,
      },
      {
        path: 'themify-icons',
        title: 'Adminor - themify-icons',
        component: ThemifyIconsComponent,
      },
      {
        path: 'typicons-icons',
        title: 'Adminor - typicons-icons',
        component: TypiconsIconsComponent,
      },
      {
        path: 'weather-icons',
        title: 'Adminor - weather-icons',
        component: WeatherIconsComponent,
      },
      {
        path: 'bootstrap-icons',
        title: 'Adminor - bootstrap-icons',
        component: BootstrapIconsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
