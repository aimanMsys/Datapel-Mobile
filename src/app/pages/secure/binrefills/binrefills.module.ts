import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinrefillsPageRoutingModule } from './binrefills-routing.module';

import { BinrefillsPage } from './binrefills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinrefillsPageRoutingModule
  ],
  declarations: [BinrefillsPage]
})
export class BinrefillsPageModule {}
