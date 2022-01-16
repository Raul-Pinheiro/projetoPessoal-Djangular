import { BooksListComponent } from './books-list/books-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {path:'', redirectTo:'book-list', pathMatch:'full'},
  {path:'book-list', component:BooksListComponent},
  {path:'add-book', component:BooksComponent},
  {path:'book-edit/:id', component:BookEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
