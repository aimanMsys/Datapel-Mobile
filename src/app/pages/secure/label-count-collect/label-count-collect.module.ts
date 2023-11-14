import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelCountCollectPageRoutingModule } from './label-count-collect-routing.module';

import { LabelCountCollectPage } from './label-count-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelCountCollectPageRoutingModule
  ],
  declarations: [LabelCountCollectPage]
})
export class LabelCountCollectPageModule {}
