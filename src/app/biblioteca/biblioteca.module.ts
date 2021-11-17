import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaLivrosComponent } from './biblioteca-livros/biblioteca-livros.component';


@NgModule({
  declarations: [
    BibliotecaLivrosComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
