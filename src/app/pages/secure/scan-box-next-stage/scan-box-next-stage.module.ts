import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanBoxNextStagePageRoutingModule } from './scan-box-next-stage-routing.module';

import { ScanBoxNextStagePage } from './scan-box-next-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanBoxNextStagePageRoutingModule
  ],
  declarations: [ScanBoxNextStagePage]
})
export class ScanBoxNextStagePageModule {}
