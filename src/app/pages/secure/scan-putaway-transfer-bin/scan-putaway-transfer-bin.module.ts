import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanPutawayTransferBinPageRoutingModule } from './scan-putaway-transfer-bin-routing.module';

import { ScanPutawayTransferBinPage } from './scan-putaway-transfer-bin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanPutawayTransferBinPageRoutingModule
  ],
  declarations: [ScanPutawayTransferBinPage]
})
export class ScanPutawayTransferBinPageModule {}
