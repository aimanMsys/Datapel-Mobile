import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewOrderBrowsePage } from './review-order-browse.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewOrderBrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewOrderBrowsePageRoutingModule {}
