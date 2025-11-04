import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './component/custom-pages/error404/error404.component';
import { ContentLayoutComponent } from './shared/layout-components/layout/content-layout/content-layout.component';
import { content } from './shared/routes/routes';
import { ErrorpageComponent } from './authentication/errorpage/errorpage.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
 
  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
  },
  // {
  //   path: 'error',
  //   component: ErrorLayoutComponent,
  //   children: Content_Routes,
  // },
  // {
  //   path: 'switcher',
  //   component: SwitcherlayoutComponent,
  //   children: SwitcherOneRoute,
  // },
  // {
  //   path: 'landing',
  //   component: LandingpageLayoutComponent,
  //   children: landing_page_Routes,
  // },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./shared/shared.module').then((m) => m.SharedModule),
  // },
  // { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
