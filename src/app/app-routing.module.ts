import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


const appRoutes: Routes = [
{path: '', component: HomeComponent, pathMatch: 'full'},
{path: 'books', component: BooksComponent, children: [
   // {path: ':id', component: BookDetailComponent }
   
   ]},
    {path: 'books/:id', component: BookDetailComponent },
{path: 'shopping-list', component: ShoppingListComponent },
{path: 'signup', component: SignupComponent },
{path: 'signin', component: SigninComponent }
];

@NgModule({
	imports: [
	RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]

})
export class AppRoutingModule {

}




