import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../services/user-api';

//import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { User } from '../models/user';
import Swal from 'sweetalert2';
import { Token } from '../models/token';
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
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private api:UserApiService, private r: Router) {
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
    console.log(this.pageFormLogin.value)
    this.api.validaLogin(this.pageFormLogin.value).subscribe(data => {

      if(data.token!=null){
        this.token = data.token;
        var tokenLogin = {} as Token
        tokenLogin._id = data.userid;
        tokenLogin.token = data.token;
        this.api.fazLoginSession(tokenLogin);
        this.mudaBtnEvent.emit("teste");

        console.log(data)
        console.log(this.token)
        this.api.obtemUserLogado().subscribe(dados => {
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
}
