import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinhasInformacoesModule } from './minhas-informacoes.module';

const routes: Routes = [
  { path: '', component: MinhasInformacoesModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinhasInformacoesRoutingModule { }
