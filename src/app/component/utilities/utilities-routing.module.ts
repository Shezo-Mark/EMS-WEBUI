import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackgroundComponent } from './background/background.component';
import { BordersComponent } from './borders/borders.component';
import { DisplayComponent } from './display/display.component';
import { FlexComponent } from './flex/flex.component';
import { HeightComponent } from './height/height.component';
import { MarginComponent } from './margin/margin.component';
import { PositionComponent } from './position/position.component';
import { PaddingComponent } from './padding/padding.component';
import { ExtrasComponent } from './extras/extras.component';
import { WidthComponent } from './width/width.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Background',
        title: 'Background',
        component: BackgroundComponent,
      },
      {
        path: 'borders',
        title: 'Adminor - borders',
        component: BordersComponent,
      },
      {
        path: 'display',
        title: 'Adminor - display',
        component: DisplayComponent,
      },
      { path: 'flex', title: 'Adminor - flex', component: FlexComponent },
      { path: 'height', title: 'Adminor - height', component: HeightComponent },
      { path: 'margin', title: 'Adminor - margin', component: MarginComponent },
      {
        path: 'position',
        title: 'Adminor - position',
        component: PositionComponent,
      },
      {
        path: 'padding',
        title: 'Adminor - padding',
        component: PaddingComponent,
      },
      { path: 'extras', title: 'Adminor - extras', component: ExtrasComponent },
      { path: 'width', title: 'Adminor - width', component: WidthComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
