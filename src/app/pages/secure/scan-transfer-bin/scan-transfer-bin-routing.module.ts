import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanTransferBinPage } from './scan-transfer-bin.page';

const routes: Routes = [
  {
    path: '',
    component: ScanTransferBinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanTransferBinPageRoutingModule {}
