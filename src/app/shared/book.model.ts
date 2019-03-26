export class Book {
	public title: string;
	public author: string;
	public imagePath: string;
	public description: string;
	public price: number;
	public name: string;
	public phone: number;
	public email: string;
	public city: string;
	

  constructor(title: string, author: string, imagePath: string, desc: string,  price: number, 
  	name: string, phone: number, email: string, city: string){
	this.title = title; 
	this.author = author;
	this.description = desc; 
	this.imagePath = imagePath;
	this.price = price;
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.city = city;

   

  }

}

