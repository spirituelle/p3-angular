import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { BestArticlesComponent } from './component/best-articles/best-articles.component';
import { BestArticleComponent } from './component/best-article/best-article.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "pagearticles", component: BestArticlesComponent },
  { path: "pagelogin", component: LoginComponent },
  { path: "pagearticle", component: BestArticleComponent},
  { path: "pageregister", component: RegisterComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
