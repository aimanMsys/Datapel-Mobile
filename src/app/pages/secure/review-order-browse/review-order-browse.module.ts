import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewOrderBrowsePageRoutingModule } from './review-order-browse-routing.module';

import { ReviewOrderBrowsePage } from './review-order-browse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewOrderBrowsePageRoutingModule
  ],
  declarations: [ReviewOrderBrowsePage]
})
export class ReviewOrderBrowsePageModule {}
