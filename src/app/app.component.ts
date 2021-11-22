import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { BibliotecaApiService } from './services/biblioteca-api';
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
  constructor(private router: Router, private apiUser: UserApiService, private apiBiblio: BibliotecaApiService) {
    if(this.apiUser.isUserLogado()){
      this.btnLogin = "LogOff"
    }
    else {
      this.btnLogin = "Login"
    }
    
    router.events.subscribe((val => {
      if(val instanceof NavigationEnd){
        this.isLogado = this.apiUser.isUserLogado();
        if(this.apiBiblio.isBibliotecaLogado()){
          this.isLogado = true;
        }
        
        if(this.isLogado){
          this.btnLogin = "LogOff"
          if(this.nomeLogado==""){
              this.apiUser.obtemUserLogado().subscribe(dados => {this.nomeLogado = dados.usuario.nome})
          }
        }
        else {
          this.nomeLogado="";
          this.btnLogin = "Login"
          var urlVar = (val as NavigationEnd).url
          if(urlVar=='/perfil'|| urlVar=='/calendario' || urlVar=='/livros'){
            router.navigateByUrl('/login')
          }
        }
      }
    }))
   }

  ngOnInit(): void { 
    if(this.apiUser.isUserLogado()){
      this.btnLogin = "LogOff"
    }
    else {
      this.btnLogin = "Login"
    }
  }

  logOnOff(){
    if(this.apiUser.isUserLogado()){
      this.apiUser.limparSession();
      this.btnLogin = "Login";
      this.router.navigateByUrl('/');
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }
}