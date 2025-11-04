import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component'; 
import { CarouselComponent } from './carousel/carousel.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CountersComponent } from './counters/counters.component';
import { ModalComponent } from './modal/modal.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SearchComponent } from './search/search.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'accordion',
        title: 'Adminor - accordion',
        component: AccordionComponent,
      },
      {
        path: 'carousel',
        title: 'Adminor - carousel',
        component: CarouselComponent,
      },
      {
        path: 'userlist',
        title: 'Adminor - userlist',
        component: UserlistComponent,
      },
      {
        path: 'collapse',
        title: 'Adminor - collapse',
        component: CollapseComponent,
      },
      {
        path: 'counters',
        title: 'Adminor - counters',
        component: CountersComponent,
      },
      { path: 'modal', title: 'Adminor - modal', component: ModalComponent },
      {
        path: 'ratings',
        title: 'Adminor - ratings',
        component: RatingsComponent,
      },
      {
        path: 'search',
        title: 'Adminor - search',
        component: SearchComponent,
      },
      {
        path: 'sweet-alert',
        title: 'Adminor - sweet-alert',
        component: SweetAlertComponent,
      },
      {
        path: 'search',
        title: 'Adminor - carousel',
        component: SearchComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceUiRoutingModule { }
