import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MinhasInformacoesComponent } from './minhas-informacoes/minhas-informacoes.component';
import { MeusLivrosComponent } from './meus-livros/meus-livros.component';
import { CalendarioDevolucaoComponent } from './calendario-devolucao/calendario-devolucao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa/mapa.component';
import { FinalizarCadastroComponent } from './finalizar-cadastro/finalizar-cadastro.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FinalizaBibliotecaComponent } from './finaliza-biblioteca/finaliza-biblioteca.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PaginaInicialComponent,
    MinhasInformacoesComponent,
    MeusLivrosComponent,
    CalendarioDevolucaoComponent,
    LoginComponent,
    MapaComponent,
    FinalizarCadastroComponent,
    TermosDeUsoComponent,
    ContatoComponent,
    SobreNosComponent,
    FinalizaBibliotecaComponent,
    CadastroLivroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
