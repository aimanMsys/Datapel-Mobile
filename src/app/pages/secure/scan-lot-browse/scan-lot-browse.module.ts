import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanLotBrowsePageRoutingModule } from './scan-lot-browse-routing.module';

import { ScanLotBrowsePage } from './scan-lot-browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanLotBrowsePageRoutingModule
  ],
  declarations: [ScanLotBrowsePage]
})
export class ScanLotBrowsePageModule {}
