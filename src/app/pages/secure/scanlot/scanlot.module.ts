import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanlotPageRoutingModule } from './scanlot-routing.module';

import { ScanlotPage } from './scanlot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanlotPageRoutingModule
  ],
  declarations: [ScanlotPage]
})
export class ScanlotPageModule {}
