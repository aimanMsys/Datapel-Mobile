import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferDetailPage } from './transfer-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TransferDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferDetailPageRoutingModule {}
