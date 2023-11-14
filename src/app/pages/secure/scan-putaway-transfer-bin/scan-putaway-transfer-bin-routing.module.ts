import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanPutawayTransferBinPage } from './scan-putaway-transfer-bin.page';

const routes: Routes = [
  {
    path: '',
    component: ScanPutawayTransferBinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanPutawayTransferBinPageRoutingModule {}
