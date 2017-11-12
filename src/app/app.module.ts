import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { PostsComponent } from './posts.component';
import { PostDetailComponent } from './postDetail.component';

import { AppRoutingModule } from './app-routing.module'

import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'funnybear-personal-site-angular' }),
    FormsModule,
    HttpModule,
    BrowserTransferStateModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
