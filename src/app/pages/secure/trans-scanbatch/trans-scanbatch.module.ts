import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransScanbatchPageRoutingModule } from './trans-scanbatch-routing.module';

import { TransScanbatchPage } from './trans-scanbatch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransScanbatchPageRoutingModule
  ],
  declarations: [TransScanbatchPage]
})
export class TransScanbatchPageModule {}
