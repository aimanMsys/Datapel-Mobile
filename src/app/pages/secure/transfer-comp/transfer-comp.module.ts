import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferCompPageRoutingModule } from './transfer-comp-routing.module';

import { TransferCompPage } from './transfer-comp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferCompPageRoutingModule
  ],
  declarations: [TransferCompPage]
})
export class TransferCompPageModule {}
