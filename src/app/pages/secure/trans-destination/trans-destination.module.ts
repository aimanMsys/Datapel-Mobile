import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransDestinationPageRoutingModule } from './trans-destination-routing.module';

import { TransDestinationPage } from './trans-destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransDestinationPageRoutingModule
  ],
  declarations: [TransDestinationPage]
})
export class TransDestinationPageModule {}
