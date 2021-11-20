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
  private user : User = {email: "",
    senha: "",
    nome:  "",
    dataDeAniversario: new Date(),
    telefone1:  "",
    telefone2: "", enderecoUsuario : [{ rua: "",
      num: "",
      bairro: "",
      cidade:"",
      estado:"",
      cep: "",
      complemento: ""} as EnderecoUsuario]} as User;
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private api:UserApiService, private r: Router) {
    this.route = router
    this.rt = r
    this.user.enderecoUsuario[0] = {} as EnderecoUsuario
    this.pageForm = this.fb.group({ nome: [this.user.nome], dataDeAniversario: [this.user.dataDeAniversario], bairro: [this.user.enderecoUsuario[0].bairro], 
      rua: [this.user.enderecoUsuario[0].rua], num: [this.user.enderecoUsuario[0].num], cidade:[this.user.enderecoUsuario[0].cidade], estado:[this.user.enderecoUsuario[0].estado],
      cep: [this.user.enderecoUsuario[0].cep], telefone1: [this.user.telefone1], telefone2: [this.user.telefone2], complemento: [this.user.enderecoUsuario[0].complemento]});
  }
  pageForm: FormGroup;

  route: ActivatedRoute = new ActivatedRoute();
  rt: Router;


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.user.nome= params['user']; 
      this.user.dataDeAniversario= params['user'];
    this.user.enderecoUsuario[0].bairro= params['user.enderecoUsuario']; 
    this.user.enderecoUsuario[0].rua= params['user.enderecoUsuario']; 
    this.user.enderecoUsuario[0].num= params['user.enderecoUsuario'];
    this.user.enderecoUsuario[0].cidade= params['user.enderecoUsuario']; 
    this.user.enderecoUsuario[0].estado= params['user.enderecoUsuario'];
    this.user.enderecoUsuario[0].cep= params['user.enderecoUsuario']; 
    this.user.telefone1= params['user']; 
    this.user.telefone2= params['user']; 
    this.user.enderecoUsuario[0].complemento= params['user.enderecoUsuario'];
     });
  }
  updateUser(){
      this.user.nome= this.pageForm.value.nome;
      this.user.dataDeAniversario= this.pageForm.value.dataDeAniversario;
    this.user.enderecoUsuario[0].bairro= this.pageForm.value.bairro;
    this.user.enderecoUsuario[0].rua= this.pageForm.value.rua;
    this.user.enderecoUsuario[0].num=this.pageForm.value.num;
    this.user.enderecoUsuario[0].cidade= this.pageForm.value.cidade;
    this.user.enderecoUsuario[0].estado= this.pageForm.value.estado;
    this.user.enderecoUsuario[0].cep= this.pageForm.value.cep;
    this.user.telefone1= this.pageForm.value.telefone1;
    this.user.telefone2= this.pageForm.value.telefone2;
    this.user.enderecoUsuario[0].complemento= this.pageForm.value.complemento;

    console.log(this.user)
    this.api.updateUserLogado(this.user)
  this.rt.navigateByUrl('/biblioteca');
  }
}
