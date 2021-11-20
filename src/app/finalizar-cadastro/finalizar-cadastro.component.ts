import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoUsuario } from '../models/enderecoUsuario';
import { User } from '../models/user';
import { UserApiService } from '../services/user-api';

@Component({
  selector: 'app-finalizar-cadastro',
  templateUrl: './finalizar-cadastro.component.html',
  styleUrls: ['./finalizar-cadastro.component.css']
})
export class FinalizarCadastroComponent implements OnInit {
  user : User = {} as User;
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private api:UserApiService, private r: Router) {
    this.route = router
    this.rt = r
    this.user.enderecoUsuario = {} as EnderecoUsuario
    this.pageForm = this.fb.group({ nome: [this.user.nome], dataDeAniversario: [this.user.dataDeAniversario], bairro: [this.user.enderecoUsuario.bairro], 
      rua: [this.user.enderecoUsuario.rua], num: [this.user.enderecoUsuario.num], cidade:[this.user.enderecoUsuario.cidade], estado:[this.user.enderecoUsuario.estado],
      cep: [this.user.enderecoUsuario.cep], telefone1: [this.user.telefone1], telefone2: [this.user.telefone2]});
  }
  pageForm: FormGroup;

  route: ActivatedRoute = new ActivatedRoute();
  rt: Router;


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.user = params['user'];
     });
  }
  updateUser(){
    this.api.updateUserLogado().subscribe(data=>console.log(data));
  }
}
