import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeusLivrosModule } from './meus-livros.module';

const routes: Routes = [
  { path: '', component: MeusLivrosModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeusLivrosRoutingModule { }
