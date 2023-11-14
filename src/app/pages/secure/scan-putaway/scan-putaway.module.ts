import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanPutawayPageRoutingModule } from './scan-putaway-routing.module';

import { ScanPutawayPage } from './scan-putaway.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanPutawayPageRoutingModule
  ],
  declarations: [ScanPutawayPage]
})
export class ScanPutawayPageModule {}
