import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferScanproductPage } from './transfer-scanproduct.page';

const routes: Routes = [
  {
    path: '',
    component: TransferScanproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferScanproductPageRoutingModule {}
