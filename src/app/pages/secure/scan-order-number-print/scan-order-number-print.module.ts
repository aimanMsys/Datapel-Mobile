import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanOrderNumberPrintPageRoutingModule } from './scan-order-number-print-routing.module';

import { ScanOrderNumberPrintPage } from './scan-order-number-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanOrderNumberPrintPageRoutingModule
  ],
  declarations: [ScanOrderNumberPrintPage]
})
export class ScanOrderNumberPrintPageModule {}
