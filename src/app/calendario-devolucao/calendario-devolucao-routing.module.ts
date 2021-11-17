import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioDevolucaoModule } from './calendario-devolucao.module';

const routes: Routes = [
  { path: '', component: CalendarioDevolucaoModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioDevolucaoRoutingModule { }
