import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBlog } from 'src/app/interface/serviceBlog.interface';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  newBlog: IBlog= {id: '' , title: '', content: ''};

  constructor(private blogService: BlogService,  private router:Router) { }

  ngOnInit(): void {
  }

  addBlog(){
    this.blogService.saveBlog(this.newBlog).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/table']);
      },
      err=>console.log(err)
    );
  }
}
