import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxGalleryModule } from 'ngx-gallery';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2/gst';

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
    Angulartics2Module.forRoot(),
    BrowserModule.withServerTransition({ appId: 'funnybear-personal-site-angular' }),
    FormsModule,
    HttpClientModule,
    TransferHttpCacheModule,
    NgxLoadingModule,
    NgxGalleryModule
  ],
  providers: [GalleryService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

