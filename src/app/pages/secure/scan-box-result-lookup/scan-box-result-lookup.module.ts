import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanBoxResultLookupPageRoutingModule } from './scan-box-result-lookup-routing.module';

import { ScanBoxResultLookupPage } from './scan-box-result-lookup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanBoxResultLookupPageRoutingModule
  ],
  declarations: [ScanBoxResultLookupPage]
})
export class ScanBoxResultLookupPageModule {}
