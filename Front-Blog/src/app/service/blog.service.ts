import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlog } from '../interface/serviceBlog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogService: IBlog[]= [];

  url='http://localhost:8080/api/blogs';
  constructor(private http: HttpClient) { }

  getAllBlogs():Observable<any>{
    return this.http.get(this.url);
  }

  getBlogById(id: string):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveBlog(user: IBlog):Observable<any>{
    return this.http.post(this.url,user);
  }

  updateBlog(id: string,user: IBlog):Observable<any>{
    return this.http.put(this.url+'/'+id,user);
  }

  deleteBlog(id: string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }

  public getBlog():Observable<IBlog[]>{
    return this.http.get<IBlog[]>(this.url);
  }
}
