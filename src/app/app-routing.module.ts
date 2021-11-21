import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudaComponent } from './ajuda/ajuda.component';
import { BibliotecaLivrosComponent } from './biblioteca/biblioteca-livros/biblioteca-livros.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CalendarioDevolucaoComponent } from './calendario-devolucao/calendario-devolucao.component';
import { MeusLivrosComponent } from './meus-livros/meus-livros.component';
import { MinhasInformacoesComponent } from './minhas-informacoes/minhas-informacoes.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa/mapa.component';
import { FinalizarCadastroComponent } from './finalizar-cadastro/finalizar-cadastro.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';



const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  {path: 'mapa', component: MapaComponent},
  { path: 'biblioteca', component: BibliotecaLivrosComponent},
  { path: 'pagina-inicial', component: PaginaInicialComponent},
  { path: '', component: PaginaInicialComponent},
  { path: 'ajuda', component: AjudaComponent },
  { path: 'livros', component: MeusLivrosComponent },
  { path: 'calendario', component: CalendarioDevolucaoComponent },
  { path: 'perfil', component: MinhasInformacoesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'finalizar-cadastro', component: FinalizarCadastroComponent},
  { path: 'termos-de-uso', component: TermosDeUsoComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'sobre-nos', component: SobreNosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }