import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmBoxCollectPageRoutingModule } from './confirm-box-collect-routing.module';

import { ConfirmBoxCollectPage } from './confirm-box-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmBoxCollectPageRoutingModule
  ],
  declarations: [ConfirmBoxCollectPage]
})
export class ConfirmBoxCollectPageModule {}
