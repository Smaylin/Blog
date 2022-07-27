import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/interface/serviceBlog.interface';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-home-page',
  templateUrl: './blog-home-page.component.html',
  styleUrls: ['./blog-home-page.component.scss']
})
export class BlogHomePageComponent implements OnInit {
  listBlogs:IBlog[]=[];
  constructor( private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe()
    console.log(this.route.queryParams.subscribe());
    //Obtener la lista de contactos
    this.blogService.getBlog().subscribe(
      res=>{
        this.listBlogs=res;
      }
    )
    console.log(this.listBlogs);
  }

}
