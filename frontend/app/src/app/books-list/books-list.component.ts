import { BookService } from './../services/book.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  bookList?: Array<any> ;
  next?: string
  previous?: string
  count?: number;
  limit?: number;

  constructor(private service: BookService, private router: Router) {
  }

  removeBook(id:any): void{
    this.service.removeBook(id).subscribe(res => this.router.routerState)



  }

  editBook(id:any, book:any){
    this.service.editBook(id, book)
  }

  ngOnInit():void {
    this.service.getAllBooks().subscribe((res:any) => {
      this.next = res.next
      this.previous = res.previous
      this.count = res.count
      this.limit = res.limit
      this.bookList = res.results
    });

  }

}
