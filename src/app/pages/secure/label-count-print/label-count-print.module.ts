import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelCountPrintPageRoutingModule } from './label-count-print-routing.module';

import { LabelCountPrintPage } from './label-count-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelCountPrintPageRoutingModule
  ],
  declarations: [LabelCountPrintPage]
})
export class LabelCountPrintPageModule {}
