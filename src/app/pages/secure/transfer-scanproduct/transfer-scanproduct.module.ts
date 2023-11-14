import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferScanproductPageRoutingModule } from './transfer-scanproduct-routing.module';

import { TransferScanproductPage } from './transfer-scanproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferScanproductPageRoutingModule
  ],
  declarations: [TransferScanproductPage]
})
export class TransferScanproductPageModule {}
