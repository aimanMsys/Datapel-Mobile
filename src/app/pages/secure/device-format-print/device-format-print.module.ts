import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceFormatPrintPageRoutingModule } from './device-format-print-routing.module';

import { DeviceFormatPrintPage } from './device-format-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceFormatPrintPageRoutingModule
  ],
  declarations: [DeviceFormatPrintPage]
})
export class DeviceFormatPrintPageModule {}
