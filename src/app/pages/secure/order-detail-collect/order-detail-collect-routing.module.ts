import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailCollectPage } from './order-detail-collect.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailCollectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailCollectPageRoutingModule {}
