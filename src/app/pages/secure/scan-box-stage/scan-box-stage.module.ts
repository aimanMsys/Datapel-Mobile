import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanBoxStagePageRoutingModule } from './scan-box-stage-routing.module';

import { ScanBoxStagePage } from './scan-box-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanBoxStagePageRoutingModule
  ],
  declarations: [ScanBoxStagePage]
})
export class ScanBoxStagePageModule {}
