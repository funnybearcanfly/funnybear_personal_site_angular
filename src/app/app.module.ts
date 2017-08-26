import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PaginationDirective } from 'angular2-bootstrap-pagination/directives/pagination.directive';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts.component';

import { AppRoutingModule } from './app-routing.module'

import { PostService } from './post.service';

@NgModule({
  declarations: [
    PaginationDirective,
    AppComponent,
    PostsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
