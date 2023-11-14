import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanTransferBinPageRoutingModule } from './scan-transfer-bin-routing.module';

import { ScanTransferBinPage } from './scan-transfer-bin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanTransferBinPageRoutingModule
  ],
  declarations: [ScanTransferBinPage]
})
export class ScanTransferBinPageModule {}
