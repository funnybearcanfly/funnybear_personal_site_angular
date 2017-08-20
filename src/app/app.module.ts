import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts.component';

import { AppRoutingModule } from './app-routing.module'

import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
