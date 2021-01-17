import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaritensPage } from './listaritens.page';

const routes: Routes = [
  {
    path: '',
    component: ListaritensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaritensPageRoutingModule {}
