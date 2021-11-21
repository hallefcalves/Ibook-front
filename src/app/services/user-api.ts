import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { observable, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';
import { Login } from '../models/login';
import { Token } from '../models/token';
import { Session } from '../models/session';
import { TokenLogin } from '../models/TokenLogin';
@Injectable({
  providedIn: 'root'
})
export class UserApiService {
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
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  getUsers() {
    return this.http.get<User[]>(this.url);
  }
  createUser(user: User): Observable<User> {
    {
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      let options = { headers: httpHeaders }
      

      return this.http.post<User>(this.url+"/registrar", user, options);
    }
  }

  updateUserLogado(userUpdate: User): Observable<User> {
    {
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      let options = { headers: httpHeaders }
      console.log("teste")
      var user = this.obtemUserLogado();
      user.subscribe(data => {
        var token = (JSON.parse(sessionStorage.getItem("userLogado") as string) as Token);
        console.log(data)
        userUpdate.email = data.usuario.email
        userUpdate.senha = data.usuario.senha
        console.log(userUpdate)
        return this.http.put<User>(this.url+"/atualizar/"+token._id, userUpdate, options).subscribe(data=>console.log(data));
      })
     return new Observable;
    }

  }

  validaLogin(login : Login):  Observable<TokenLogin> {
    {
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      let options = { headers: httpHeaders }
      

      return this.http.post<TokenLogin>(this.url + "/auth", login, options);
    }
  }

  isUserLogado(): boolean{
    return sessionStorage.getItem("userLogado")!=null;
  }

  obtemUserLogado(): Observable<Session> {
    console.log(sessionStorage.getItem("userLogado"))
    if(sessionStorage.getItem("userLogado")!=null){
      var token = (JSON.parse(sessionStorage.getItem("userLogado") as string) as Token);
      console.log(token)
      return this.http.get<Session>(this.url + "/" + token._id);
    }
    return new Observable;
  }

  fazLoginSession(user : Token){
    console.log("salvo session: "+ JSON.stringify(user))
    sessionStorage.setItem("userLogado", JSON.stringify(user));
  }
}
