import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteStagePageRoutingModule } from './complete-stage-routing.module';

import { CompleteStagePage } from './complete-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteStagePageRoutingModule
  ],
  declarations: [CompleteStagePage]
})
export class CompleteStagePageModule {}
