import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailCollectPageRoutingModule } from './order-detail-collect-routing.module';

import { OrderDetailCollectPage } from './order-detail-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailCollectPageRoutingModule
  ],
  declarations: [OrderDetailCollectPage]
})
export class OrderDetailCollectPageModule {}
