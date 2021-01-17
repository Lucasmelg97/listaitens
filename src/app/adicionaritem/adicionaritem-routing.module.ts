import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionaritemPage } from './adicionaritem.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionaritemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionaritemPageRoutingModule {}
