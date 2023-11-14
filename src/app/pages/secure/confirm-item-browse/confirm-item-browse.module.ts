import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmItemBrowsePageRoutingModule } from './confirm-item-browse-routing.module';

import { ConfirmItemBrowsePage } from './confirm-item-browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmItemBrowsePageRoutingModule
  ],
  declarations: [ConfirmItemBrowsePage]
})
export class ConfirmItemBrowsePageModule {}
