import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailPrintPage } from './order-detail-print.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailPrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailPrintPageRoutingModule {}
