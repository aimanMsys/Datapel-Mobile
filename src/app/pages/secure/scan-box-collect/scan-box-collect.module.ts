import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanBoxCollectPageRoutingModule } from './scan-box-collect-routing.module';

import { ScanBoxCollectPage } from './scan-box-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanBoxCollectPageRoutingModule
  ],
  declarations: [ScanBoxCollectPage]
})
export class ScanBoxCollectPageModule {}
