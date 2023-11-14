import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxSuccessStagePageRoutingModule } from './box-success-stage-routing.module';

import { BoxSuccessStagePage } from './box-success-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoxSuccessStagePageRoutingModule
  ],
  declarations: [BoxSuccessStagePage]
})
export class BoxSuccessStagePageModule {}
