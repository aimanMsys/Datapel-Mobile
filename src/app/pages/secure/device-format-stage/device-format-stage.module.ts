import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceFormatStagePageRoutingModule } from './device-format-stage-routing.module';

import { DeviceFormatStagePage } from './device-format-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceFormatStagePageRoutingModule
  ],
  declarations: [DeviceFormatStagePage]
})
export class DeviceFormatStagePageModule {}
