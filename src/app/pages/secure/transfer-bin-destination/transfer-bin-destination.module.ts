import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferBinDestinationPageRoutingModule } from './transfer-bin-destination-routing.module';

import { TransferBinDestinationPage } from './transfer-bin-destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferBinDestinationPageRoutingModule
  ],
  declarations: [TransferBinDestinationPage]
})
export class TransferBinDestinationPageModule {}
