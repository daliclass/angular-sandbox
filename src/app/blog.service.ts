import { Injectable } from '@angular/core';
import { Entry } from 'contentful';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getBlogs(query?: object): Observable<Entry<any>[]> {
    return this.httpClient.get<Entry<any>[]>(environment.apiURL + '/blog');
  }

  getBlog(id: string, query?: object): Promise<Entry<any>> {
    return null;
  }
}
