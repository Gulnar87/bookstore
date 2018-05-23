export class Book {
	public title: string;
	public author: string;
	public imagePath: string;
	public description: string;
	public price: number;

  constructor(title: string, author: string, imagePath: string, desc: string,  price: number){
	this.title = title; 
	this.author = author;
	this.description = desc; 
	this.imagePath = imagePath;
	this.price = price;
  }

}

