
import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../shared/book.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class BookService {

	
	private	books: Book[] =[
	new Book('A Farewell to Arms', 'Ernest Hemingway', 'https://img1.od-cdn.com/ImageType-400/0293-1/A09/1E6/08/%7BA091E608-0129-4DF3-BBA7-BC2CE94912D7%7DImg400.jpg', 
		'The best American novel to emerge from World War I, A Farewell to Arms is the unforgettable story of an American ambulance driver on the Italian front and his passion for a beautiful English nurse. Hemingway’s frank portrayal of the love between Lieutenant Henry and Catherine Barkley, caught in the inexorable sweep of war, glows with an intensity unrivaled in modern literature, while his description of the German attack on Caporetto—of lines of fired men marching in the rain, hungry, weary, and demoralized—is one of the greatest moments in literary history.', 16 ),
    new Book('All Quiet on Western Front', 'Eric Maria Remarque', 'https://img1.od-cdn.com/ImageType-400/0111-1/31D/98C/97/%7B31D98C97-5CFB-4B87-A0FD-B218B2C14F19%7DImg400.jpg', 
    'The book describes the German soldiers\' extreme physical and mental stress during the war, and the detachment from civilian life felt by many of these soldiers upon returning home from the front. ', 16 ),
    new Book('The Outsider ', 'Albert Camus', 'http://1.bp.blogspot.com/-m1UgYxRcPIM/TeP_0MxAhqI/AAAAAAAAANc/fRypEP3dKYQ/s1600/TheOutsider_Albert_Camus.jpg', 'In The Outsider (1942), his classic existentialist novel, Camus explores the alienation of an individual who refuses to conform to social norms.  Meursault, his anti-hero, will not lie. When his mother dies, he refuses to show his emotions simply to satisfy the expectations of others. And when he commits a random act of violence on a sun-drenched beach near Algiers, his lack of remorse compounds his guilt in the eyes of society and the law. Yet he is as much a victim as a criminal. Albert Camus\' portrayal of a man confronting the absurd, and revolting against the injustice of society, depicts the paradox of man\'s joy in life when faced with the \'tender indifference\' of the world.'
, 20),
    new Book('1984 ', 'George Orwell', 'https://img1.od-cdn.com/ImageType-400/5835-1/716/4EE/DE/%7B7164EEDE-97B1-4975-9A95-A874A393C829%7DImg400.jpg', 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmare vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life--the ubiquity of television, the distortion of the language--and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.'
, 20),
      new Book('A Farewell to Arms', 'Ernest Hemingway', 'https://img1.od-cdn.com/ImageType-400/0293-1/A09/1E6/08/%7BA091E608-0129-4DF3-BBA7-BC2CE94912D7%7DImg400.jpg', 
    'The best American novel to emerge from World War I, A Farewell to Arms is the unforgettable story of an American ambulance driver on the Italian front and his passion for a beautiful English nurse. Hemingway’s frank portrayal of the love between Lieutenant Henry and Catherine Barkley, caught in the inexorable sweep of war, glows with an intensity unrivaled in modern literature, while his description of the German attack on Caporetto—of lines of fired men marching in the rain, hungry, weary, and demoralized—is one of the greatest moments in literary history.', 16 ),
    new Book('All Quiet on Western Front', 'Eric Maria Remarque', 'https://img1.od-cdn.com/ImageType-400/0111-1/31D/98C/97/%7B31D98C97-5CFB-4B87-A0FD-B218B2C14F19%7DImg400.jpg', 
    'The book describes the German soldiers\' extreme physical and mental stress during the war, and the detachment from civilian life felt by many of these soldiers upon returning home from the front. ', 16 ),
    new Book('The Outsider ', 'Albert Camus', 'http://1.bp.blogspot.com/-m1UgYxRcPIM/TeP_0MxAhqI/AAAAAAAAANc/fRypEP3dKYQ/s1600/TheOutsider_Albert_Camus.jpg', 'In The Outsider (1942), his classic existentialist novel, Camus explores the alienation of an individual who refuses to conform to social norms.  Meursault, his anti-hero, will not lie. When his mother dies, he refuses to show his emotions simply to satisfy the expectations of others. And when he commits a random act of violence on a sun-drenched beach near Algiers, his lack of remorse compounds his guilt in the eyes of society and the law. Yet he is as much a victim as a criminal. Albert Camus\' portrayal of a man confronting the absurd, and revolting against the injustice of society, depicts the paradox of man\'s joy in life when faced with the \'tender indifference\' of the world.'
, 20),
    new Book('1984 ', 'George Orwell', 'https://img1.od-cdn.com/ImageType-400/5835-1/716/4EE/DE/%7B7164EEDE-97B1-4975-9A95-A874A393C829%7DImg400.jpg', 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmare vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life--the ubiquity of television, the distortion of the language--and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.'
, 20)
	];

	constructor(private slService: ShoppingListService) {}

  getBooks(){
  	return this.books.slice();
  }

  getBook(index: number){
    
    return this.books[index];


  }


  addBookToShoppingList(books: Book){
  	this.slService.addBooks(books);

  }

}