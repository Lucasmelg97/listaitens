import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionaritemPageRoutingModule } from './adicionaritem-routing.module';

import { AdicionaritemPage } from './adicionaritem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionaritemPageRoutingModule
  ],
  declarations: [AdicionaritemPage]
})
export class AdicionaritemPageModule {}
