import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferBinSourcePageRoutingModule } from './transfer-bin-source-routing.module';

import { TransferBinSourcePage } from './transfer-bin-source.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferBinSourcePageRoutingModule
  ],
  declarations: [TransferBinSourcePage]
})
export class TransferBinSourcePageModule {}
