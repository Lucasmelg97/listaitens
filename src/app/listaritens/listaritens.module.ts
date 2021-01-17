import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaritensPageRoutingModule } from './listaritens-routing.module';

import { ListaritensPage } from './listaritens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaritensPageRoutingModule
  ],
  declarations: [ListaritensPage]
})
export class ListaritensPageModule {}
