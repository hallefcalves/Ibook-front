import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { EnderecoUsuario } from '../models/enderecoUsuario';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../services/user-api';
import { sanitizeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-minhas-informacoes',
  templateUrl: './minhas-informacoes.component.html',
  styleUrls: ['./minhas-informacoes.component.css']
})
export class MinhasInformacoesComponent implements OnInit {

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
  this.pageForm = this.fb.group({ email: [this.user.email], nome: [this.user.nome], dataDeAniversario: [this.user.dataDeAniversario], bairro: [this.user.enderecoUsuario[0].bairro], 
    rua: [this.user.enderecoUsuario[0].rua], num: [this.user.enderecoUsuario[0].num], cidade:[this.user.enderecoUsuario[0].cidade], estado:[this.user.enderecoUsuario[0].estado],
    cep: [this.user.enderecoUsuario[0].cep], telefone1: [this.user.telefone1], complemento: [this.user.enderecoUsuario[0].complemento]});
  }
  pageForm: FormGroup;

  route: ActivatedRoute = new ActivatedRoute();
  rt: Router;

  ngOnInit(): void {
    this.api.obtemUserLogado().subscribe(dados => {
      var user = dados.usuario

      this.user.nome= user.nome;
      this.user.email = user.email;
      this.user.dataDeAniversario= user.dataDeAniversario;
      this.user.enderecoUsuario[0].bairro= user.enderecoUsuario[0].bairro;
      this.user.enderecoUsuario[0].rua= user.enderecoUsuario[0].rua;
      this.user.enderecoUsuario[0].num=user.enderecoUsuario[0].num;
      this.user.enderecoUsuario[0].cidade= user.enderecoUsuario[0].cidade;
      this.user.enderecoUsuario[0].estado= user.enderecoUsuario[0].estado;
      this.user.enderecoUsuario[0].cep= user.enderecoUsuario[0].cep;
      this.user.telefone1= user.telefone1;
      this.user.enderecoUsuario[0].complemento= user.enderecoUsuario[0].complemento;

      this.pageForm.setValue({
        email: this.user.email, nome: this.user.nome, dataDeAniversario: this.user.dataDeAniversario, bairro: this.user.enderecoUsuario[0].bairro, 
    rua: this.user.enderecoUsuario[0].rua, num: this.user.enderecoUsuario[0].num, cidade:this.user.enderecoUsuario[0].cidade, estado:this.user.enderecoUsuario[0].estado,
    cep: this.user.enderecoUsuario[0].cep, telefone1: this.user.telefone1, complemento: this.user.enderecoUsuario[0].complemento
      });
    })
  }

  updateUser(){
  this.user.nome= this.pageForm.value.nome;
  this.user.email = this.pageForm.value.email;
  this.user.dataDeAniversario= this.pageForm.value.dataDeAniversario;
  this.user.enderecoUsuario[0].bairro= this.pageForm.value.bairro;
  this.user.enderecoUsuario[0].rua= this.pageForm.value.rua;
  this.user.enderecoUsuario[0].num=this.pageForm.value.num;
  this.user.enderecoUsuario[0].cidade= this.pageForm.value.cidade;
  this.user.enderecoUsuario[0].estado= this.pageForm.value.estado;
  this.user.enderecoUsuario[0].cep= this.pageForm.value.cep;
  this.user.telefone1= this.pageForm.value.telefone1;
  this.user.enderecoUsuario[0].complemento= this.pageForm.value.complemento;

  console.log(this.user)
  this.api.updateUserLogado(this.user)
  }
}
