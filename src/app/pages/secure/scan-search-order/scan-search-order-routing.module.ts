import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanSearchOrderPage } from './scan-search-order.page';

const routes: Routes = [
  {
    path: '',
    component: ScanSearchOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanSearchOrderPageRoutingModule {}
