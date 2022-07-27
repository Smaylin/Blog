import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../service/blog.service';
import { IBlog } from '../../interface/serviceBlog.interface';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  id: string | undefined;
  blog: IBlog = {
    id: '',
    title: '',
    content: '',
  }
  constructor( private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      (params: any) => {
        if(params.id){
          this.id = params.id;
      }
    }
    )

    console.log( this.route.queryParams.subscribe());

    if(history.state.data){
      this.blog = history.state.data;
      console.log(  this.blog = history.state.data);
    }
  }

}
