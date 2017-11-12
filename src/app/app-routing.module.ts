import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { PostsComponent } from './posts.component';
import { PostDetailComponent } from './postDetail.component';

const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'post/:id', component: PostDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }