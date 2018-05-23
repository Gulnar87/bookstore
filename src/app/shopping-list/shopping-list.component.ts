import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

books: Book[]; 
 isCollapsed = false;


  constructor(private slService: ShoppingListService) { 
 }



  ngOnInit() {

     this.books = this.slService.getBooks();

     this.slService.booksChanged
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        }
      );
  }


   onToggle(){
     this.isCollapsed = !this.isCollapsed; 


   }

}
