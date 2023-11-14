import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelCountPageRoutingModule } from './label-count-routing.module';

import { LabelCountPage } from './label-count.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelCountPageRoutingModule
  ],
  declarations: [LabelCountPage]
})
export class LabelCountPageModule {}
