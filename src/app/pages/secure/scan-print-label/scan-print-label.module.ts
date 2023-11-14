import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanPrintLabelPageRoutingModule } from './scan-print-label-routing.module';

import { ScanPrintLabelPage } from './scan-print-label.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanPrintLabelPageRoutingModule
  ],
  declarations: [ScanPrintLabelPage]
})
export class ScanPrintLabelPageModule {}
