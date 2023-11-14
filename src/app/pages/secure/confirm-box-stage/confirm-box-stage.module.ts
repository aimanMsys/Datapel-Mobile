import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmBoxStagePageRoutingModule } from './confirm-box-stage-routing.module';

import { ConfirmBoxStagePage } from './confirm-box-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmBoxStagePageRoutingModule
  ],
  declarations: [ConfirmBoxStagePage]
})
export class ConfirmBoxStagePageModule {}
