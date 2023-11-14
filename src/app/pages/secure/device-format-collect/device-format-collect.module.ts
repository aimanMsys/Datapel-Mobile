import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceFormatCollectPageRoutingModule } from './device-format-collect-routing.module';

import { DeviceFormatCollectPage } from './device-format-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceFormatCollectPageRoutingModule
  ],
  declarations: [DeviceFormatCollectPage]
})
export class DeviceFormatCollectPageModule {}
