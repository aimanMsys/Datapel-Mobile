import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteTransferBinPageRoutingModule } from './complete-transfer-bin-routing.module';

import { CompleteTransferBinPage } from './complete-transfer-bin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteTransferBinPageRoutingModule
  ],
  declarations: [CompleteTransferBinPage]
})
export class CompleteTransferBinPageModule {}
