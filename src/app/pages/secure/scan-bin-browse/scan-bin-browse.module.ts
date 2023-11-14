import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanBinBrowsePageRoutingModule } from './scan-bin-browse-routing.module';

import { ScanBinBrowsePage } from './scan-bin-browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanBinBrowsePageRoutingModule
  ],
  declarations: [ScanBinBrowsePage]
})
export class ScanBinBrowsePageModule {}
