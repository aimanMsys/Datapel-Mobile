import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockMoredetailsPageRoutingModule } from './stock-moredetails-routing.module';

import { StockMoredetailsPage } from './stock-moredetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockMoredetailsPageRoutingModule
  ],
  declarations: [StockMoredetailsPage]
})
export class StockMoredetailsPageModule {}
