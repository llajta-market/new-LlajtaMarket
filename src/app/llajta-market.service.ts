import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class LlajtaMarketService {
  private productURL='/'

  constructor(private http: HttpClient,
    private messageService: MessageService) { }
  
  searchItem(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productURL}?name=${term}`).pipe(
      tap(_ => this.log(`found item matching "${term}"`)),
      catchError(this.handleError<Product[]>('searchItem', []))
    );
  }

  updateItem(item: Product): Observable<any> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.productURL}${id}`;
    console.log(item);
    return this.http.put(url, item, httpOptions).pipe(
      tap(_ => this.log(`updated meeting id = ${id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

