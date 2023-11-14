import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseOrderPageRoutingModule } from './browse-order-routing.module';

import { BrowseOrderPage } from './browse-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseOrderPageRoutingModule
  ],
  declarations: [BrowseOrderPage]
})
export class BrowseOrderPageModule {}
