import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCardHeaderComponent } from './layout-components/element-card-header/element-card-header.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { Header2Component } from './layout-components/header2/header2.component';
import { ContentLayoutComponent } from './layout-components/layout/content-layout/content-layout.component';
import { ErrorLayoutComponent } from './layout-components/layout/error-layout/error-layout.component';
import { SwitcherlayoutComponent } from './layout-components/layout/switcherlayout/switcherlayout.component';
import { LoaderComponent } from './layout-components/loader/loader.component';
import { PageHeaderComponent } from './layout-components/page-header/page-header.component';
import { PageHeader2Component } from './layout-components/page-header2/page-header2.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { SwitcherComponent } from './layout-components/switcher/switcher.component';
import { BackToTopComponent } from './layout-components/back-to-top/back-to-top.component';
import { FullscreenDirective } from './directive/fullscreen.directive';
import { HoverEffectSidebarDirective } from './directive/hover-effect-sidebar.directive';
import { SideMenuToggleDirective } from './directive/side-menu-toggle.directive';
import { ToggleThemeDirective } from './directive/toggle-theme.directive';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { NgxColorsModule } from 'ngx-colors';
import { LandingpageLayoutComponent } from './layout-components/layout/landingpage-layout/landingpage-layout.component';
import { StudentProfileComponent } from './layout-components/student-profile/student-profile.component';


@NgModule({
  declarations: [
    ElementCardHeaderComponent,
    FooterComponent,
    HeaderComponent,
    Header2Component,
    ContentLayoutComponent,
    ErrorLayoutComponent,
    SwitcherlayoutComponent,
    LoaderComponent,
    PageHeaderComponent,
    PageHeader2Component,
    SidebarComponent,
    SwitcherComponent,
    BackToTopComponent,
    FullscreenDirective,
    HoverEffectSidebarDirective,
    SideMenuToggleDirective,
    ToggleThemeDirective,
    LandingpageLayoutComponent,
    StudentProfileComponent,
    
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    //NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    NgScrollbarModule,
    NgxColorsModule,NgbModule
  ],
  exports: [
    PageHeaderComponent,
    PageHeader2Component,
    ElementCardHeaderComponent,
    BackToTopComponent
  ],
  providers: [],
})
export class SharedModule {}
