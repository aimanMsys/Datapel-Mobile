import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanBatchBrowsePageRoutingModule } from './scan-batch-browse-routing.module';

import { ScanBatchBrowsePage } from './scan-batch-browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanBatchBrowsePageRoutingModule
  ],
  declarations: [ScanBatchBrowsePage]
})
export class ScanBatchBrowsePageModule {}
