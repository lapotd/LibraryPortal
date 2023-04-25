import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Models/book';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http-service.service';

@Injectable({
  providedIn: 'root',
})
export class BookHttpService extends BaseHttpService {
  private booksUrl = 'books';

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  public getBooks$(): Observable<Book> {
    return this.httpClient.get<Book>(this.baseUrl + this.booksUrl);
  }
}
