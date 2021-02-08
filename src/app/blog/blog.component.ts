import "regenerator-runtime/runtime";
import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Entry} from 'contentful';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blog: Entry<any> = null;

  constructor(private contentfulService: BlogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.contentfulService.getBlog(this.activatedRoute.snapshot.params.id)
      .then(blog => {
        this.blog = blog;
      });
  }
}
