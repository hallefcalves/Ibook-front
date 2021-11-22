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
    if(this.apiUser.isUserLogado() || this.apiBiblio.isBibliotecaLogado()){
      this.btnLogin = "LogOff"
    }
    else {
      this.btnLogin = "Login"
    }
    
    router.events.subscribe((val => {
      this.isLogado = this.apiUser.isUserLogado();
      if(this.apiBiblio.isBibliotecaLogado()){
        this.isLogado = true;
      }

      if(val instanceof NavigationEnd){
        if(this.isLogado){
          this.btnLogin = "LogOff"
          if(this.nomeLogado==""){
              this.apiUser.obtemUserLogado().subscribe(dados => {this.nomeLogado = dados.usuario.nome})
          }
        }
      }

      if(val instanceof NavigationStart){
        

        if(this.isLogado){
          this.btnLogin = "LogOff"
          if(this.nomeLogado==""){
              this.apiUser.obtemUserLogado().subscribe(dados => {this.nomeLogado = dados.usuario.nome})
          }
        }
        else {
          this.nomeLogado="";
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
    
  }

  logOnOff(){
    if(this.apiUser.isUserLogado() || this.apiBiblio.isBibliotecaLogado()){
      this.apiUser.limparSession();
      this.btnLogin = "Login";
      this.router.navigateByUrl('/');
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }
}