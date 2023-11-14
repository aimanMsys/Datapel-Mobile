import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespatchPageRoutingModule } from './despatch-routing.module';

import { DespatchPage } from './despatch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespatchPageRoutingModule
  ],
  declarations: [DespatchPage]
})
export class DespatchPageModule {}
