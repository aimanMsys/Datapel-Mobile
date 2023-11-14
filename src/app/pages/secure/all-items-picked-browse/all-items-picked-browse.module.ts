import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllItemsPickedBrowsePageRoutingModule } from './all-items-picked-browse-routing.module';

import { AllItemsPickedBrowsePage } from './all-items-picked-browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllItemsPickedBrowsePageRoutingModule
  ],
  declarations: [AllItemsPickedBrowsePage]
})
export class AllItemsPickedBrowsePageModule {}
