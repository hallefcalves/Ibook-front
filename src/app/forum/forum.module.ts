import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumListaComponent } from './forum-lista/forum-lista.component';


@NgModule({
  declarations: [
    ForumListaComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule
  ]
})
export class ForumModule { }
