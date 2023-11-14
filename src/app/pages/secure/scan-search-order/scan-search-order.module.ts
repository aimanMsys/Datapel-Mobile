import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanSearchOrderPageRoutingModule } from './scan-search-order-routing.module';

import { ScanSearchOrderPage } from './scan-search-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanSearchOrderPageRoutingModule
  ],
  declarations: [ScanSearchOrderPage]
})
export class ScanSearchOrderPageModule {}
