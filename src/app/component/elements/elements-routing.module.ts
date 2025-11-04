import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ImagesComponent } from './images/images.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PAGINATIONComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { TagsComponent } from './tags/tags.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ToastComponent } from './toast/toast.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alerts',
        title: 'Adminor - alerts',
        component: AlertsComponent,
      },
      {
        path: 'avatar',
        title: 'Adminor - avatar',
        component: AvatarComponent,
      },
      {
        path: 'badges',
        title: 'Adminor - badges',
        component: BadgesComponent,
      },
      {
        path: 'breadcrumbs',
        title: 'Adminor - breadcrumbs',
        component: BreadcrumbsComponent,
      },
      {
        path: 'buttons',
        title: 'Adminor - buttons',
        component: ButtonsComponent,
      },
      {
        path: 'dropdowns',
        title: 'Adminor - dropdowns',
        component: DropdownsComponent,
      },
      {
        path: 'images',
        title: 'Adminor - images',
        component: ImagesComponent,
      },
      {
        path: 'list-group',
        title: 'Adminor - list-group',
        component: ListGroupComponent,
      },
      {
        path: 'media-object',
        title: 'Adminor - media-object',
        component: MediaObjectComponent,
      },
      {
        path: 'navigation',
        title: 'Adminor - navigation',
        component: NavigationComponent,
      },
      {
        path: 'pagination',
        title: 'Adminor - pagination',
        component: PAGINATIONComponent,
      },
      {
        path: 'Popover',
        title: 'Adminor - Popover',
        component: PopoverComponent,
      },
      {
        path: 'progress',
        title: 'Adminor - progress',
        component: ProgressComponent,
      },
      {
        path: 'spinners',
        title: 'Adminor - spinners',
        component: SpinnersComponent,
      },
      { path: 'tags', title: 'Adminor - tags', component: TagsComponent },
      {
        path: 'thumbnails',
        title: 'Adminor - thumbnails',
        component: ThumbnailsComponent,
      },
      { path: 'toast', title: 'Adminor - toast', component: ToastComponent },
      {
        path: 'tooltip',
        title: 'Adminor - tooltip',
        component: TooltipComponent,
      },
      {
        path: 'typography',
        title: 'Adminor - typography',
        component: TypographyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
