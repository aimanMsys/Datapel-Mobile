import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanCountBrowsePageRoutingModule } from './scan-count-browse-routing.module';

import { ScanCountBrowsePage } from './scan-count-browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanCountBrowsePageRoutingModule
  ],
  declarations: [ScanCountBrowsePage]
})
export class ScanCountBrowsePageModule {}
