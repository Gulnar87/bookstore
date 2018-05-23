import { Component, ViewChild, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { Book } from '../shared/book.model';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
   moduleId: 'src/app/app.component',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: Array<string>;

  constructor(private bookService: BookService) { }

  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
@ViewChild(SwiperDirective) directiveRef?: SwiperDirective;

    books: Book[];

    ngOnInit() {
    this.books = this.bookService.getBooks();
  }


   public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
     // loop: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true,
    spaceBetween: 15,
    grabCursor: true,
    centeredSlides: false,

     breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }

  };


  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination', 
    clickable: true,
    hideOnClick: false,

     
  };

    private navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
      }; 

}



 




 
 
 