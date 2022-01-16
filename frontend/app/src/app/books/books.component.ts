import { BookService } from './../services/book.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../model/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {


  book_title:string    =   "";
  book_author:string   =   "";
  book_price:number    =   0;


  constructor(private service: BookService, private router: Router) { }

  register(){
    const dados: Book={
      "book_title":this.book_title,
      "book_author":this.book_author,
      "book_price":this.book_price
    }
    this.service.addBook(dados).subscribe(r=>{
      this.router.navigateByUrl('book-list')
      this.cleanForm();
    });
  }
  cleanForm(){
    this.book_title = "";
    this.book_author = "";
    this.book_price = 0;
  }

}

