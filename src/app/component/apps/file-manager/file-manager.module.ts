import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';
import { FileManagerDetailsComponent } from './file-manager-details/file-manager-details.component';
import { FILEATTACHMENtsComponent } from './file-attachments/file-attachments.component';
import { SharedModule } from "../../../shared/shared.module";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FileManagerComponent,
    FileManagerListComponent,
    FileManagerDetailsComponent,
    FILEATTACHMENtsComponent,
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    SharedModule,
    CarouselModule,
    GalleryModule,
    LightboxModule,
    NgxDropzoneModule,
    NgbModule
  ],
})
export class FileManagerModule {}
