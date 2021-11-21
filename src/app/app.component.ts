import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from './services/user-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css/bootstrap.css'],
})
export class AppComponent {
  title = 'IBookSite';
  btnLogin: string;
  constructor(private router: Router, private api:UserApiService) {
    if(this.api.isUserLogado()){
      this.btnLogin = "LogOff"
    }
    else {
      this.btnLogin = "Login"
    }
    
    router.events.subscribe((val => {
      if(this.api.isUserLogado()){
        this.btnLogin = "LogOff"
      }
      else {
        this.btnLogin = "Login"
      }
    }))
   }

  ngOnInit(): void { 
    if(this.api.isUserLogado()){
      this.btnLogin = "LogOff"
    }
    else {
      this.btnLogin = "Login"
    }
  }

  logOnOff(){
    if(this.api.isUserLogado()){
      this.api.limparSession();
      this.btnLogin = "Login";
      this.router.navigateByUrl('/');
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }
}