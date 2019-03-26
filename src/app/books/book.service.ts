
import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { AngularFireDatabase , AngularFireList} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { switchMap, take, tap} from 'rxjs/operators';


@Injectable()
export class BookService {
   booksChanged = new Subject<Book[]>();
   
    
	private	books:Book[] =[
// 	new Book('A Farewell to Arms', 'Ernest Hemingway', 'https://img1.od-cdn.com/ImageType-400/0293-1/A09/1E6/08/%7BA091E608-0129-4DF3-BBA7-BC2CE94912D7%7DImg400.jpg', 
// 		'The best American novel to emerge from World War I, A Farewell to Arms is the unforgettable story of an American ambulance driver on the Italian front and his passion for a beautiful English nurse. Hemingway’s frank portrayal of the love between Lieutenant Henry and Catherine Barkley, caught in the inexorable sweep of war, glows with an intensity unrivaled in modern literature, while his description of the German attack on Caporetto—of lines of fired men marching in the rain, hungry, weary, and demoralized—is one of the greatest moments in literary history.', 16, 'Gulnar', 558616100, 'gulnar_mammadova@yahoo.com', 'Baku'),
//     new Book('All Quiet on Western Front', 'Eric Maria Remarque', 'https://img1.od-cdn.com/ImageType-400/0111-1/31D/98C/97/%7B31D98C97-5CFB-4B87-A0FD-B218B2C14F19%7DImg400.jpg', 
//     'The book describes the German soldiers\' extreme physical and mental stress during the war, and the detachment from civilian life felt by many of these soldiers upon returning home from the front. ', 16, 'Gulnar', 558616100, 'gulnar_mammadova@yahoo.com', 'Baku' ),
//     new Book('The Outsider ', 'Albert Camus', 'http://1.bp.blogspot.com/-m1UgYxRcPIM/TeP_0MxAhqI/AAAAAAAAANc/fRypEP3dKYQ/s1600/TheOutsider_Albert_Camus.jpg', 'In The Outsider (1942), his classic existentialist novel, Camus explores the alienation of an individual who refuses to conform to social norms.  Meursault, his anti-hero, will not lie. When his mother dies, he refuses to show his emotions simply to satisfy the expectations of others. And when he commits a random act of violence on a sun-drenched beach near Algiers, his lack of remorse compounds his guilt in the eyes of society and the law. Yet he is as much a victim as a criminal. Albert Camus\' portrayal of a man confronting the absurd, and revolting against the injustice of society, depicts the paradox of man\'s joy in life when faced with the \'tender indifference\' of the world.'
// , 20, 'Gulnar', 558616100, 'gulnar_mammadova@yahoo.com', 'Baku'),
//     new Book('1984 ', 'George Orwell', 'https://img1.od-cdn.com/ImageType-400/5835-1/716/4EE/DE/%7B7164EEDE-97B1-4975-9A95-A874A393C829%7DImg400.jpg', 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmare vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life--the ubiquity of television, the distortion of the language--and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.'
// , 20, 'Gulnar', 558616100, 'gulnar_mammadova@yahoo.com', 'Baku'),
//       new Book('A Farewell to Arms', 'Ernest Hemingway', 'https://img1.od-cdn.com/ImageType-400/0293-1/A09/1E6/08/%7BA091E608-0129-4DF3-BBA7-BC2CE94912D7%7DImg400.jpg', 
//     'The best American novel to emerge from World War I, A Farewell to Arms is the unforgettable story of an American ambulance driver on the Italian front and his passion for a beautiful English nurse. Hemingway’s frank portrayal of the love between Lieutenant Henry and Catherine Barkley, caught in the inexorable sweep of war, glows with an intensity unrivaled in modern literature, while his description of the German attack on Caporetto—of lines of fired men marching in the rain, hungry, weary, and demoralized—is one of the greatest moments in literary history.', 16, 'Aynur', 558616100, 'gulnar_mammadova@yahoo.com', 'Ganja' ),
//     new Book('All Quiet on Western Front', 'Eric Maria Remarque', 'https://img1.od-cdn.com/ImageType-400/0111-1/31D/98C/97/%7B31D98C97-5CFB-4B87-A0FD-B218B2C14F19%7DImg400.jpg', 
//     'The book describes the German soldiers\' extreme physical and mental stress during the war, and the detachment from civilian life felt by many of these soldiers upon returning home from the front. ', 16, 'Gulshan', 558616100, 'gulnar_mammadova@yahoo.com', 'Baku' ),
//     new Book('The Outsider ', 'Albert Camus', 'http://1.bp.blogspot.com/-m1UgYxRcPIM/TeP_0MxAhqI/AAAAAAAAANc/fRypEP3dKYQ/s1600/TheOutsider_Albert_Camus.jpg', 'In The Outsider (1942), his classic existentialist novel, Camus explores the alienation of an individual who refuses to conform to social norms.  Meursault, his anti-hero, will not lie. When his mother dies, he refuses to show his emotions simply to satisfy the expectations of others. And when he commits a random act of violence on a sun-drenched beach near Algiers, his lack of remorse compounds his guilt in the eyes of society and the law. Yet he is as much a victim as a criminal. Albert Camus\' portrayal of a man confronting the absurd, and revolting against the injustice of society, depicts the paradox of man\'s joy in life when faced with the \'tender indifference\' of the world.'
// , 20, 'Gulnar', 558616100, 'gulnar_mammadova@yahoo.com', 'Baku'),
//     new Book('1984 ', 'George Orwell', 'https://img1.od-cdn.com/ImageType-400/5835-1/716/4EE/DE/%7B7164EEDE-97B1-4975-9A95-A874A393C829%7DImg400.jpg', 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmare vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life--the ubiquity of television, the distortion of the language--and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.'
// , 20, 'Gulnar', 558616100, 'gulnar_mammadova@yahoo.com', 'Baku'),
//     new Book('The Idiot', 'Fyodor Dostoevsky', 'http://kbimages1-a.akamaihd.net/Images/42fe217f-48b6-45c5-b449-96aa89085aa8/500/400/False/image.jpg', 'The title is an ironic reference to the central character of the novel, Prince (Knyaz) Lev Nikolayevich Myshkin, a young man whose goodness, open-hearted simplicity and guilelessness lead many of the more worldly characters he encounters to mistakenly assume that he lacks intelligence and insight. In the character of Prince Myshkin, Dostoevsky set himself the task of depicting "the positively good and beautiful man." The novel examines the consequences of placing such a unique individual at the centre of the conflicts, desires, passions and egoism of worldly society, both for the man himself and for those with whom he becomes involved.', 20, 'Gulnar', 7779998888, 'gulnar@gmail.com', 'Amsterdam'),
//     new Book('Steppenwolf', 'Herman Hesse', 'https://img1.od-cdn.com/ImageType-400/4847-1/0F5/970/23/%7B0F597023-AA1B-4D9C-BC37-410ED007F1E9%7DImg400.jpg', 'Steppenwolf is a poetical self-portrait of a man who felt himself to be half-human and half-wolf. This Faust-like and magical story is evidence of Hesse\'s searching philosophy and extraordinary sense of humanity as he tells of the humanization of a middle-aged misanthrope. Yet his novel can also be seen as a plea for rigorous self-examination and an indictment of the intellectual hypocrisy of the period. As Hesse himself remarked, "Of all my books Steppenwolf is the one that was more often and more violently misunderstood than any of the others".', 30, 'Jane',  135677888, 'jane@yahoo.com', 'London'),
//     new Book('The Great Gatsby', 'Scott Fitzgerald', 'https://img1.od-cdn.com/ImageType-400/0439-1/F25/FDF/56/%7BF25FDF56-2D4D-4BAE-9E98-224B4886805F%7DImg400.jpg', 'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan. Considered to be Fitzgerald\'s magnum opus, The Great Gatsby explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Roaring Twenties that has been described as a cautionary tale regarding the American Dream.', 32, 'Mary', 557453321, 'mary@gmail.com', 'The Hague'),
//     new Book('The Castle', 'Franz Kafka', 'https://img1.od-cdn.com/ImageType-400/0887-1/A6E/AC7/14/%7BA6EAC714-CAE8-481C-9D65-C97362C10828%7DImg400.jpg', 'The Castle (German: Das Schloss, also spelled Das Schloß [das ˈʃlɔs]) is a 1926 novel by Franz Kafka. In it a protagonist known only as K. arrives in a village and struggles to gain access to the mysterious authorities who govern it from a castle. Kafka died before finishing the work, but suggested it would end with K. dying in the village, the castle notifying him on his death bed that his "legal claim to live in the village was not valid, yet, taking certain auxiliary circumstances into account, he was permitted to live and work there." Dark and at times surreal, The Castle is often understood to be about alienation, unresponsive bureaucracy, the frustration of trying to conduct business with non-transparent, seemingly arbitrary controlling systems, and the futile pursuit of an unobtainable goal.', 25, 'Gulnar', 7779998888, 'gulnar@gmail.com', 'Amsterdam' )
// 
	];

	constructor(private slService: ShoppingListService, 
              private db: AngularFireDatabase, 
              private afAuth: AngularFireAuth,
             ) {

  }



  getBooks(){
  	return this.books.slice();
  }

  getBook(index: number){
    return this.books[index];
  }

  setBooks(books: Book[]){
    this.books = books;
    this.booksChanged.next(this.books.slice());

  }
  
  addBookToShoppingList(book: Book){
  	this.slService.addBook(book);
    // this.booksChanged.next(this.books.slice()); 

  }

  addBook(book: Book){
    this.books.push(book);
    this.booksChanged.next(this.books.slice()); 
  }

   updateBook(index: number, newBook: Book) {
    this.books[index] = newBook;
    this.booksChanged.next(this.books.slice());
  }

   deleteBook (index: number) {
    this.books.splice(index, 1);
    this.booksChanged.next(this.books.slice());
  }
}