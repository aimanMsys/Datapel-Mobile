import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockMoredetailsPage } from './stock-moredetails.page';

const routes: Routes = [
  {
    path: '',
    component: StockMoredetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockMoredetailsPageRoutingModule {}
