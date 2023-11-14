import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransScanpickbinPageRoutingModule } from './trans-scanpickbin-routing.module';

import { TransScanpickbinPage } from './trans-scanpickbin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransScanpickbinPageRoutingModule
  ],
  declarations: [TransScanpickbinPage]
})
export class TransScanpickbinPageModule {}
