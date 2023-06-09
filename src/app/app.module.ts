import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { LastArticleComponent } from './component/last-article/last-article.component';
import { OtherArticleComponent } from './component/other-article/other-article.component';
import { ButtonBackComponent } from './component/button-back/button-back.component';
import { TravelComponent } from './component/travel/travel.component';
import { AdviceComponent } from './component/advice/advice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    LastArticleComponent,
    OtherArticleComponent,
    ButtonBackComponent,
    TravelComponent,
    AdviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
