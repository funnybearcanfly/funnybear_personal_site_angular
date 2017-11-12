import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { PostsComponent } from './posts.component';

import { AppRoutingModule } from './app-routing.module'

import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'funnybear-personal-site-angular' }),
    FormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
