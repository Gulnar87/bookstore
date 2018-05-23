import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../shared/book.model';
import { BookService } from '../book.service';
import { faShoppingCart, faCaretDown, faCaretUp} from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';
import { ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
	  book: Book;
    isCollapsed = false;
    id: number;
    
   

  constructor(private bookService: BookService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    fontawesome.library.add(faShoppingCart, faCaretDown, faCaretUp);

    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.book = this.bookService.getBook(this.id);

      });

  }

  onAddToShoppingList(){
  	this.bookService.addBookToShoppingList(this.book)
  }



}
