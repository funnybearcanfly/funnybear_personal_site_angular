import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoadingModule } from 'ngx-loading';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { GalleryComponent } from './gallery.component';
import { PostsComponent } from './posts.component';
import { PostDetailComponent } from './postDetail.component';

import { AppRoutingModule } from './app-routing.module'

import { GalleryService } from './gallery.service';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'funnybear-personal-site-angular' }),
    FormsModule,
    HttpModule,
    BrowserTransferStateModule,
    LoadingModule,
    NgxGalleryModule
  ],
  providers: [GalleryService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
