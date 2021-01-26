import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';


const CONFIG = {
  space: 'uicxpe07f55q',
  accessToken: '_iGyWOmbKp7L5BTH4oR6qak3JuJhwIKEuzM7qbKGPL8',

  contentTypeIds: {
    blog: 'blog'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getBlogs(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blog
    }, query))
    .then(res => res.items);
  }

  getBlog(id: string, query?: object): Promise<Entry<any>> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blog,
      'fields.slug': id
    }, query))
      .then(res => res.items[0]);
  }
}
