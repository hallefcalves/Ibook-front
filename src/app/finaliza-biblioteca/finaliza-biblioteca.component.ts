import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Biblioteca } from '../models/biblioteca';
import { EnderecoUsuario } from '../models/enderecoUsuario';
import { BibliotecaApiService } from '../services/biblioteca-api';

@Component({
  selector: 'app-finaliza-biblioteca',
  templateUrl: './finaliza-biblioteca.component.html',
  styleUrls: ['./finaliza-biblioteca.component.css']
})
export class FinalizaBibliotecaComponent implements OnInit {

  private user : Biblioteca = {email: "",
    senha: "",
    nome:  "",
    telefone1:  "",
    telefone2: "", enderecoBiblioteca : [{ rua: "",
      num: "",
      bairro: "",
      cidade:"",
      estado:"",
      cep: "",
      complemento: ""} as EnderecoUsuario]} as Biblioteca;
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private api:BibliotecaApiService, private r: Router) {
    this.route = router
    this.rt = r
    this.user.enderecoBiblioteca[0] = {} as EnderecoUsuario
    this.pageForm = this.fb.group({ nome: [this.user.nome], nomeResponsavel: [this.user.nomeResponsavel], emailResponsavel: [this.user.emailResponsavel], bairro: [this.user.enderecoBiblioteca[0].bairro], 
      rua: [this.user.enderecoBiblioteca[0].rua], num: [this.user.enderecoBiblioteca[0].num], cidade:[this.user.enderecoBiblioteca[0].cidade], estado:[this.user.enderecoBiblioteca[0].estado],
      cep: [this.user.enderecoBiblioteca[0].cep], telefone1: [this.user.telefone1], telefone2: [this.user.telefone2], complemento: [this.user.enderecoBiblioteca[0].complemento]});
  }
  pageForm: FormGroup;

  route: ActivatedRoute = new ActivatedRoute();
  rt: Router;


  ngOnInit(): void {
    //this.route.queryParams.subscribe(params => {
     //});
  }
  updateUser(){
      this.user.nome= this.pageForm.value.nome;
      this.user.nomeResponsavel= this.pageForm.value.nomeResponsavel;
      this.user.emailResponsavel= this.pageForm.value.emailResponsavel;
    this.user.enderecoBiblioteca[0].bairro= this.pageForm.value.bairro;
    this.user.enderecoBiblioteca[0].rua= this.pageForm.value.rua;
    this.user.enderecoBiblioteca[0].num=this.pageForm.value.num;
    this.user.enderecoBiblioteca[0].cidade= this.pageForm.value.cidade;
    this.user.enderecoBiblioteca[0].estado= this.pageForm.value.estado;
    this.user.enderecoBiblioteca[0].cep= this.pageForm.value.cep;
    this.user.telefone1= this.pageForm.value.telefone1;
    this.user.telefone2= this.pageForm.value.telefone2;
    this.user.enderecoBiblioteca[0].complemento= this.pageForm.value.complemento;

    console.log(this.user)
    this.api.updateBibliotecaLogado(this.user)
  this.rt.navigateByUrl('/biblioteca');
  }

}
