import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from '../model/book.model';
@Injectable({
  providedIn:'root'
})
export class BookService {
  bookList:any;
  private url = "http://localhost:8000/";
  constructor(private http: HttpClient) {}

  get books(){
    return this.bookList;
  }
  getAllBooks(){
    return this.http.get(this.url)
  }
  getEspecificBook(id:number){
    return this.http.get(`${this.url}${id}`)
  }
  addBook(book:Book): Observable<Book>{
    return this.http.post<Book>(this.url,book)
  }

  removeBook(id:number){
    return this.http.delete(`${this.url}${id}`)
  }

  editBook(id:number, dados:any){
    return this.http.put(`${this.url}${id}`, dados);
  }

}
