import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../service/blog.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  list: any=[];

  constructor(private blogService: BlogService) { }
  
  ngOnInit(): void {
    this.listBlogs()
  }

  listBlogs() {
    this.blogService.getAllBlogs().subscribe(
      res=>{
        this.list = res;
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
    console.log("object");
  }

  delete(id:string) {
    this.blogService.deleteBlog(id).subscribe(
      res=>{
        console.log(res);
        this.listBlogs();
      }
    )
  }
}
