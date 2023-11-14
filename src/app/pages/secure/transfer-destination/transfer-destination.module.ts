import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferDestinationPageRoutingModule } from './transfer-destination-routing.module';

import { TransferDestinationPage } from './transfer-destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferDestinationPageRoutingModule
  ],
  declarations: [TransferDestinationPage]
})
export class TransferDestinationPageModule {}
