import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinLookupPageRoutingModule } from './bin-lookup-routing.module';

import { BinLookupPage } from './bin-lookup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinLookupPageRoutingModule
  ],
  declarations: [BinLookupPage]
})
export class BinLookupPageModule {}
