import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanBoxBrowsePageRoutingModule } from './scan-box-browse-routing.module';

import { ScanBoxBrowsePage } from './scan-box-browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanBoxBrowsePageRoutingModule
  ],
  declarations: [ScanBoxBrowsePage]
})
export class ScanBoxBrowsePageModule {}
