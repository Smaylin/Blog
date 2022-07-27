import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './pages/blog/add-page/add-page.component';
import { TablePageComponent } from './pages/blog/table-page/table-page.component';
import { EditPageComponent } from './pages/blog/edit-page/edit-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogHomePageComponent } from './pages/blog-home-page/blog-home-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
  },
  { path: 'table', 
    component: TablePageComponent 
  },
  {path:'add', 
    component: AddPageComponent
  },
  {path:'edit/:id',
    component: EditPageComponent
  },
  {path:'blog',
  component:BlogHomePageComponent
  },
  {
    path: 'blog/:title',
    component:BlogPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component:NotFoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
