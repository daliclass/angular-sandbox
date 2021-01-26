import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
