import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailPrintPageRoutingModule } from './order-detail-print-routing.module';

import { OrderDetailPrintPage } from './order-detail-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailPrintPageRoutingModule
  ],
  declarations: [OrderDetailPrintPage]
})
export class OrderDetailPrintPageModule {}
