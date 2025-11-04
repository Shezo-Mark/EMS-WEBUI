import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgesComponent } from './badges/badges.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ImagesComponent } from './images/images.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { PAGINATIONComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { TypographyComponent } from './typography/typography.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToastComponent } from './toast/toast.component';
import { TagsComponent } from './tags/tags.component';
import { SharedModule } from "../../shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlertsComponent,
    AvatarComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    BadgesComponent,
    DropdownsComponent,
    ThumbnailsComponent,
    ImagesComponent,
    NavigationComponent,
    ListGroupComponent,
    PAGINATIONComponent,
    PopoverComponent,
    ProgressComponent,
    SpinnersComponent,
    MediaObjectComponent,
    TypographyComponent,
    TooltipComponent,
    ToastComponent,
    TagsComponent,
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
  ],
})
export class ElementsModule {}
