import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseOrderPage } from './browse-order.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseOrderPageRoutingModule {}
