import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/post/post.component';
import { FooterComponent } from './component/footer/footer.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { CategoriComponent } from './component/categori/categori.component';
import { BestArticlesComponent } from './component/best-articles/best-articles.component';
import { BestArticleComponent } from './component/best-article/best-article.component';


// import
import {RouterModule} from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    PostsComponent,
    PostComponent,
    FooterComponent,
    CategoriesComponent,
    CategoriComponent,
    BestArticlesComponent,
    BestArticleComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // import
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
