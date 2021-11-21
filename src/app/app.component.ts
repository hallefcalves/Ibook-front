import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UserApiService } from './services/user-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css/bootstrap.css'],
})
export class AppComponent {
  title = 'IBookSite';
  nomeLogado: string = "";
  btnLogin: string;
  isLogado: boolean = false;
  constructor(private router: Router, private api:UserApiService) {
    if(this.api.isUserLogado()){
      this.btnLogin = "LogOff"
    }
    else {
      this.btnLogin = "Login"
    }
    
    router.events.subscribe((val => {
      if(val instanceof NavigationStart){
        this.isLogado = this.api.isUserLogado();
        
        if(this.isLogado){
          this.btnLogin = "LogOff"
          if(this.nomeLogado==""){
              this.api.obtemUserLogado().subscribe(dados => {this.nomeLogado = dados.usuario.nome})
          }
        }
        else {
          this.btnLogin = "Login"
          var urlVar = (val as NavigationStart).url
          if(urlVar=='/perfil'|| urlVar=='/calendario' || urlVar=='/livros'){
            router.navigateByUrl('/login')
          }
        }
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