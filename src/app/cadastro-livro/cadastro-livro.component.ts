import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Livro } from '../models/livro';
import { livroApiService } from '../services/livro-api';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {
  pageForm: FormGroup;
  livro :Livro = {} as Livro;
  constructor(rt: Router, private fb: FormBuilder, private apiLivro: livroApiService) {
    this.pageForm = this.fb.group({ titulo: [this.livro.titulo], descricao: [this.livro.descricao], genero: [this.livro.genero] })
   }

  ngOnInit(): void {
  }

  createBook(){
    this.livro.descricao = this.pageForm.value.descricao;
    this.livro.titulo = this.pageForm.value.titulo;
    this.livro.genero = this.pageForm.value.genero;
    this.apiLivro.createlivro(this.livro);
  }
}
