import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockLookupPageRoutingModule } from './stock-lookup-routing.module';

import { StockLookupPage } from './stock-lookup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockLookupPageRoutingModule
  ],
  declarations: [StockLookupPage]
})
export class StockLookupPageModule {}
