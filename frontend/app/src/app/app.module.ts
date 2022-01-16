import { HttpClientModule } from '@angular/common/http';
import { NgModule, DEFAULT_CURRENCY_CODE,  LOCALE_ID} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books-list/books-list.component';
import localePt from '@angular/common/locales/pt';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [	
    AppComponent,
      BooksComponent,
      BooksListComponent,
      BookEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
