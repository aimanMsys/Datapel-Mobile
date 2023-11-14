import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailStagePage } from './order-detail-stage.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailStagePageRoutingModule {}
