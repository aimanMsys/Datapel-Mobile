import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item3PageRoutingModule } from './item3-routing.module';

import { Item3Page } from './item3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item3PageRoutingModule
  ],
  declarations: [Item3Page]
})
export class Item3PageModule {}
