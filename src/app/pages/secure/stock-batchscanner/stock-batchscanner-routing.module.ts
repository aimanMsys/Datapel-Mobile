import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockBatchscannerPage } from './stock-batchscanner.page';

const routes: Routes = [
  {
    path: '',
    component: StockBatchscannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockBatchscannerPageRoutingModule {}
