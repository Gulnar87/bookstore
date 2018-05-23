import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import {faFacebook} from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  	fontawesome.library.add(faSearch);
	
}

}
