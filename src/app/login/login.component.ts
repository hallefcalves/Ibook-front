import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../services/user-api';

//import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { User } from '../models/user';
import Swal from 'sweetalert2';
import { Token } from '../models/token';
import { BibliotecaApiService } from '../services/biblioteca-api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string | null = '';
  senha: string | null = '';
  token: string = '';
  pageFormLogin: FormGroup;
  route: ActivatedRoute;
  tipoUser: string="0";
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private apiUser:UserApiService,private apiBiblio:BibliotecaApiService, private r: Router) {
    this.route = router
    this.pageFormLogin = this.fb.group({ email: [this.email], senha: [this.senha] })
    this.rt = r
  }

  rt: Router;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['login'];
      this.senha = params['login'];
     });
  }

  @Output() mudaBtnEvent = new EventEmitter<string>();

  validaLogin() {

    console.log(this.tipoUser)
    if(this.tipoUser == "0"){
      this.validaUser();
    }
    else if(this.tipoUser == "1"){
      this.validaBiblioteca();
    }
  }

  validaBiblioteca(){
    console.log(this.pageFormLogin.value)

    this.apiBiblio.validaLogin(this.pageFormLogin.value).subscribe(data => {
      console.log(data)
      if(data.token!=null){
        this.token = data.token;
        var tokenLogin = {} as Token
        tokenLogin._id = data.bibliotecaid;
        tokenLogin.token = data.token;
        console.log(tokenLogin)
        this.apiBiblio.fazLoginSession(tokenLogin);
        this.mudaBtnEvent.emit("teste");

        console.log(data)
        console.log(this.token)
        this.apiBiblio.obtemBibliotecaLogado().subscribe(dados => {
          var user = dados.usuario
          if(user.enderecoUsuario.length==0){
            this.rt.navigateByUrl('/finaliza-biblioteca');
          }
          else{
            this.rt.navigateByUrl('/biblioteca');
          }
        })
      }
      else{
        Swal.fire('Erro', 'Email ou senha incorretos!', 'error')  
      }
    },
    erro => Swal.fire('Erro', 'Email ou senha incorretos!', 'error') );
  }

  validaUser(){
    console.log(this.pageFormLogin.value)


    this.apiUser.validaLogin(this.pageFormLogin.value).subscribe(data => {

      if(data.token!=null){
        this.token = data.token;
        var tokenLogin = {} as Token
        tokenLogin._id = data.userid;
        tokenLogin.token = data.token;
        this.apiUser.fazLoginSession(tokenLogin);
        this.mudaBtnEvent.emit("teste");

        console.log(data)
        console.log(this.token)
        this.apiUser.obtemUserLogado().subscribe(dados => {
          var user = dados.usuario
          if(user.enderecoUsuario.length==0){
            this.rt.navigateByUrl('/finalizar-cadastro');
          }
          else{
            this.rt.navigateByUrl('/biblioteca');
          }
        })
      }
      else{
        Swal.fire('Erro', 'Email ou senha incorretos!', 'error')  
      }
    },
    erro => Swal.fire('Erro', 'Email ou senha incorretos!', 'error') );
  }

  onItemChange1(value: string){
    if(value = "on"){
      this.tipoUser = "0";
    }
    
 }

 onItemChange2(value: string){
  if(value = "on"){
    this.tipoUser = "1";
  }
  
}
onItemChange3(value: string){
  if(value = "on"){
    this.tipoUser = "2";
  }
  
}
}
