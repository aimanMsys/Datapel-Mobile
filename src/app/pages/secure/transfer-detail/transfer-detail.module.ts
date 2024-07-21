import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferDetailPageRoutingModule } from './transfer-detail-routing.module';

import { TransferDetailPage } from './transfer-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferDetailPageRoutingModule
  ],
  declarations: [TransferDetailPage]
})
export class TransferDetailPageModule {}
