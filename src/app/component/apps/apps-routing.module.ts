import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CardsComponent } from './cards/cards.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContentScrollbarComponent } from './content-scrollbar/content-scrollbar.component';
import { ImagesComparsionComponent } from './images-compare/images-comparsion.component';
//import { MapLeafletComponent } from './map-leaflet/map-leaflet.component';
import { NotificationComponent } from './notification/notification.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { WidgetNotificationComponent } from './widget-notification/widget-notification.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'calendar',
        title: 'Adminor - calendar',
        component: CalendarComponent,
      },
      { path: 'cards', title: 'Adminor - cards', component: CardsComponent },
      {
        path: 'contacts',
        title: 'Adminor - contacts',
        component: ContactsComponent,
      },
      {
        path: 'content-scrollbar',
        title: 'Adminor - content-scrollbar',
        component: ContentScrollbarComponent,
      },
      {
        path: 'image-compare',
        title: 'Adminor - images-comparsion',
        component: ImagesComparsionComponent,
      },
      // {
      //   path: 'map-leaflet',
      //   title: 'Adminor - map-leaflet',
      //   component: MapLeafletComponent,
      // },
      {
        path: 'notification',
        title: 'Adminor - notification',
        component: NotificationComponent,
      },
      {
        path: 'range-slider',
        title: 'Adminor - range-slider',
        component: RangeSliderComponent,
      },
      {
        path: 'treeview',
        title: 'Adminor - treeview',
        component: TreeviewComponent,
      },
      {
        path: 'widget-notification',
        title: 'Adminor - widget-notification',
        component: WidgetNotificationComponent,
      },
      {
        path: 'widgets',
        title: 'Adminor - widgets',
        component: WidgetsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsRoutingModule {}
