import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Book } from '../../../shared/book.model';
import { BookService } from '../../book.service';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent  {
   @Input() book: Book; 
   @Input() index: number;

 constructor(private bookService: BookService) { }


  onAddToShoppingList(){
  	this.bookService.addBookToShoppingList(this.book)
  }


}
