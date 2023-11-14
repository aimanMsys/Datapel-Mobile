import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferMenuPageRoutingModule } from './transfer-menu-routing.module';

import { TransferMenuPage } from './transfer-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferMenuPageRoutingModule
  ],
  declarations: [TransferMenuPage]
})
export class TransferMenuPageModule {}
