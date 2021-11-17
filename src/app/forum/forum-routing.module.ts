import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumListaComponent } from './forum-lista/forum-lista.component';

const routes: Routes = [
  {path:'', component:ForumListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
