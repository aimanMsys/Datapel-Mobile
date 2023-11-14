import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanStagingAreaStagePageRoutingModule } from './scan-staging-area-stage-routing.module';

import { ScanStagingAreaStagePage } from './scan-staging-area-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanStagingAreaStagePageRoutingModule
  ],
  declarations: [ScanStagingAreaStagePage]
})
export class ScanStagingAreaStagePageModule {}
