import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranserScanpickbinPageRoutingModule } from './transer-scanpickbin-routing.module';

import { TranserScanpickbinPage } from './transer-scanpickbin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranserScanpickbinPageRoutingModule
  ],
  declarations: [TranserScanpickbinPage]
})
export class TranserScanpickbinPageModule {}
