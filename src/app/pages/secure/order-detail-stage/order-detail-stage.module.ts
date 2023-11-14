import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailStagePageRoutingModule } from './order-detail-stage-routing.module';

import { OrderDetailStagePage } from './order-detail-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailStagePageRoutingModule
  ],
  declarations: [OrderDetailStagePage]
})
export class OrderDetailStagePageModule {}
