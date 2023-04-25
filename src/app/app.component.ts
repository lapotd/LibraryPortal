import { Component, OnInit } from '@angular/core';
import { BookHttpService } from './Services/book-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'Library Portal';

  constructor(private readonly bookService:BookHttpService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks$().subscribe((books) => console.log(books));
  }



}
