import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteCollectPageRoutingModule } from './complete-collect-routing.module';

import { CompleteCollectPage } from './complete-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteCollectPageRoutingModule
  ],
  declarations: [CompleteCollectPage]
})
export class CompleteCollectPageModule {}
