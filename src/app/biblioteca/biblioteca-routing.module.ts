import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaLivrosComponent } from './biblioteca-livros/biblioteca-livros.component';

const routes: Routes = [
  { path: '', component: BibliotecaLivrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
