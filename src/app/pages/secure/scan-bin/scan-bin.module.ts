import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanBinPageRoutingModule } from './scan-bin-routing.module';

import { ScanBinPage } from './scan-bin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanBinPageRoutingModule
  ],
  declarations: [ScanBinPage]
})
export class ScanBinPageModule {}
