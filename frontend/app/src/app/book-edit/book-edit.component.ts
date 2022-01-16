import { BookService } from './../services/book.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book?:any;
  id:any
  constructor(private service: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {

        var id:any = params.get('id');
        this.service.getEspecificBook(id).subscribe( (res) => {
          this.book = res;

        });

        this.id = id

    });


  }

  editBook(){
      this.service.editBook(this.id,this.book).subscribe((res) => {
        this.router.navigateByUrl('book-list')
      })
  }
}
