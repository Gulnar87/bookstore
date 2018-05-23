import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from './material.module';
import { CarouselModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import  { BookService } from './books/book.service';
import  { ShoppingListService } from './shopping-list/shopping-list.service';
import { ShortenPipe } from './shorten.pipe';
import { HighlightDirective } from './shared/highlight.directive';
import { CollapseDirective } from './shared/collapse.directive';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';




const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    HomeComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BookItemComponent,
    ShortenPipe,
    HighlightDirective,
    CollapseDirective,
    SignupComponent,
    SigninComponent,
    
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
     MaterialModule,
     CarouselModule.forRoot(),
     SwiperModule
 
  
  ],
  providers: [BookService, ShoppingListService,  {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }], 
    
  bootstrap: [AppComponent]
})
export class AppModule { }






