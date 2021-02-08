import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';
import {BlogService} from '../blog.service';
import { Meta, Title } from '@angular/platform-browser';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogs: Observable<Entry<any>[]>;

  constructor(private blogService: BlogService, private meta: Meta, private title: Title) {
    title.setTitle('All the blogs in the world!')
    meta.addTags([{name: 'description', content: 'this is rendered by angular universal and hopefully is picked up by web crawlers'}]);
  }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }
}
