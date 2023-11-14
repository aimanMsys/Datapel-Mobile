import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanBoxLookupPageRoutingModule } from './scan-box-lookup-routing.module';

import { ScanBoxLookupPage } from './scan-box-lookup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanBoxLookupPageRoutingModule
  ],
  declarations: [ScanBoxLookupPage]
})
export class ScanBoxLookupPageModule {}
