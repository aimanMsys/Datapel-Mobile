import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmQtyPageRoutingModule } from './confirm-qty-routing.module';

import { ConfirmQtyPage } from './confirm-qty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmQtyPageRoutingModule
  ],
  declarations: [ConfirmQtyPage]
})
export class ConfirmQtyPageModule {}
