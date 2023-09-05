import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockLookupPage } from './stock-lookup.page';

const routes: Routes = [
  {
    path: '',
    component: StockLookupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockLookupPageRoutingModule {}
