import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
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
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        BackgroundComponent,
        BordersComponent,
        DisplayComponent,
        FlexComponent,
        HeightComponent,
        MarginComponent,
        PositionComponent,
        PaddingComponent,
        ExtrasComponent,
        WidthComponent
    ],
    imports: [
        CommonModule,
        UtilitiesRoutingModule,
        SharedModule
    ]
})
export class UtilitiesModule { }
