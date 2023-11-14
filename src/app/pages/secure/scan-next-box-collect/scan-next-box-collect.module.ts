import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanNextBoxCollectPageRoutingModule } from './scan-next-box-collect-routing.module';

import { ScanNextBoxCollectPage } from './scan-next-box-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanNextBoxCollectPageRoutingModule
  ],
  declarations: [ScanNextBoxCollectPage]
})
export class ScanNextBoxCollectPageModule {}
