import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPagesRoutingModule } from './blog-pages-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { SharedModule } from "../../../shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [BlogComponent, BlogDetailsComponent, EditPostComponent],
  imports: [
    CommonModule,
    BlogPagesRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
    LightboxModule,
    NgxDropzoneModule,
    NgSelectModule,
    AngularEditorModule,
    HttpClientModule,
    NgxEditorModule,
  ],
})
export class BlogPagesModule {}
