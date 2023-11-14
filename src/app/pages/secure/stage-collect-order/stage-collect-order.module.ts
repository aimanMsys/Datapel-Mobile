import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StageCollectOrderPageRoutingModule } from './stage-collect-order-routing.module';

import { StageCollectOrderPage } from './stage-collect-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StageCollectOrderPageRoutingModule
  ],
  declarations: [StageCollectOrderPage]
})
export class StageCollectOrderPageModule {}
