import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  {
    path: 'Blog-pages',
    children: [
      { path: 'Blog', title: 'Adminor-Blog', component: BlogComponent },
      {
        path: 'Blog-details',
        title: 'Adminor-Blog-details',
        component: BlogDetailsComponent,
      },
      {
        path: 'edit-post',
        title: 'Adminor-edit-post',
        component: EditPostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPagesRoutingModule { }
