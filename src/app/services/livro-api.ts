import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { observable, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Livro } from '../models/livro';
import { Login } from '../models/login';
import { Token } from '../models/token';
import { Session } from '../models/session';
import { TokenLogin } from '../models/TokenLogin';
@Injectable({
  providedIn: 'root'
})
export class livroApiService {
  url = "https://ibook-back.herokuapp.com/usuario";
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a livro-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  getlivros() {
    return this.http.get<Livro[]>(this.url);
  }
  createlivro(livro: Livro): Observable<Livro> {
    {
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      let options = { headers: httpHeaders }
      

      return this.http.post<Livro>(this.url+"/registrar", livro, options);
    }
  }

  updateLivro(livroUpdate: Livro): Observable<Livro> {
    {
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      let options = { headers: httpHeaders }
      console.log("teste")

    return this.http.put<Livro>(this.url+"/atualizar/"+livroUpdate._id, livroUpdate, options);

    }

  }

  obtemLivro(id: string): Observable<Livro> {
    console.log(sessionStorage.getItem("livroLogado"))
      return this.http.get<Livro>(this.url + "/" + id);
  }
}
