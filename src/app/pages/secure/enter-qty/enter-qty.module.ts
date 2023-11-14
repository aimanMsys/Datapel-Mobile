import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterQtyPageRoutingModule } from './enter-qty-routing.module';

import { EnterQtyPage } from './enter-qty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterQtyPageRoutingModule
  ],
  declarations: [EnterQtyPage]
})
export class EnterQtyPageModule {}
