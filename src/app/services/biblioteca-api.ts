import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { observable, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Login } from '../models/login';
import { Token } from '../models/token';
import { Session } from '../models/session';
import { Biblioteca } from '../models/biblioteca';
@Injectable({
  providedIn: 'root'
})
export class BibliotecaApiService {
  url = "https://ibook-back.herokuapp.com/biblioteca";
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
    // Return an observable with a Biblioteca-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  getBiblioteca() {
    return this.http.get<Biblioteca[]>(this.url);
  }
  createBiblioteca(Biblioteca: Biblioteca): Observable<Biblioteca> {
    {
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      let options = { headers: httpHeaders }
      

      return this.http.post<Biblioteca>(this.url+"/registrar", Biblioteca, options);
    }
  }

  updateBibliotecaLogado(BibliotecaUpdate: Biblioteca): Observable<Biblioteca> {
    {
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      let options = { headers: httpHeaders }
      console.log("teste")
      var Biblioteca = this.obtemBibliotecaLogado();
      Biblioteca.subscribe(data => {
        var token = (JSON.parse(sessionStorage.getItem("BibliotecaLogado") as string) as Session).usuario;
        console.log(data)
        BibliotecaUpdate.email = data.usuario.email
        BibliotecaUpdate.senha = data.usuario.senha
        console.log(BibliotecaUpdate)
        return this.http.post<Biblioteca>(this.url+"/atualizar/"+token._id, BibliotecaUpdate, options).subscribe(data=>console.log(data));
      })
     return new Observable;
    }

  }

  validaLogin(login : Login):  Observable<Token> {
    {
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      let options = { headers: httpHeaders }
      

      return this.http.post<Token>(this.url + "/auth", login, options);
    }
  }

  isBibliotecaLogado(): boolean{
    return sessionStorage.getItem("BibliotecaLogado")!=null;
  }

  obtemBibliotecaLogado(): Observable<Session> {
    if(sessionStorage.getItem("BibliotecaLogado")!=null){
      console.log("e")
      var token = (JSON.parse(sessionStorage.getItem("BibliotecaLogado") as string) as Session).usuario;
      return this.http.get<Session>(this.url + "/" + token._id);
    }
    return new Observable;
  }

  fazLoginSession(Biblioteca : Token){
    console.log("salvo session: "+ JSON.stringify(Biblioteca))
    sessionStorage.setItem("BibliotecaLogado", JSON.stringify(Biblioteca));
  }
}