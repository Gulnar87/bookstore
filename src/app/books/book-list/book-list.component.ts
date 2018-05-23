// import { Component, OnInit } from '@angular/core';
// import { Book } from '../../shared/book.model';
// import { BookService } from '../book.service';


// @Component({
//   selector: 'app-book-list',
//   templateUrl: './book-list.component.html',
//   styleUrls: ['./book-list.component.css']
// })
// export class BookListComponent implements OnInit {
//   books: Book[];

//   constructor(private bookService: BookService) { }

//   ngOnInit() {
//     this.books = this.bookService.getBooks();
//   }

// }



import { Component, ViewChild, OnInit } from '@angular/core';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { Book } from '../../shared/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  moduleId: 'src/app/app.component',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.css' ]


})
export class BookListComponent implements OnInit  {

    @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
@ViewChild(SwiperDirective) directiveRef?: SwiperDirective;

	  books: Book[];

  constructor(private bookService: BookService) { }

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