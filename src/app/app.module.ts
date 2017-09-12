import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts.component';
import { ArchivesComponent } from './archives.component';
import { ElseWhereComponent } from './elsewhere.component';

import { AppRoutingModule } from './app-routing.module'

import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ArchivesComponent,
    ElseWhereComponent
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
