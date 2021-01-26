import { Component, OnInit } from '@angular/core';
import {Entry} from 'contentful';
import {ContentfulService} from '../contentful.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogs: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getBlogs()
      .then(blogs => {
        this.blogs = blogs;
        console.log(blogs);
      });
  }
}
