import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlog } from 'src/app/interface/serviceBlog.interface';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  id:string="";
  newBlog: IBlog= {id:'' , title:'', content:''};
  constructor(
    private blogService: BlogService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    console.log("asdfds");
    this.id = this.activateRouter.snapshot.params['id'];
    this.blogService.getBlogById(this.id).subscribe(
      res=>{
        this.newBlog = res;
        console.log("asdf", this.newBlog = res);
      },
      err=> console.log(err)
    );
    console.log("hola");
  }

  save(){
    this.blogService.updateBlog(this.id,this.newBlog).subscribe(
      res=>{
        this.router.navigate(['/table']);
      },
      err=> console.log(err)
    )
  }

}
