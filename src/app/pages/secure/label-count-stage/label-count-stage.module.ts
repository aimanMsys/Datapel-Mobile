import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelCountStagePageRoutingModule } from './label-count-stage-routing.module';

import { LabelCountStagePage } from './label-count-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelCountStagePageRoutingModule
  ],
  declarations: [LabelCountStagePage]
})
export class LabelCountStagePageModule {}
