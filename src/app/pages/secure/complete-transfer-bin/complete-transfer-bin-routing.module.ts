import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteTransferBinPage } from './complete-transfer-bin.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteTransferBinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteTransferBinPageRoutingModule {}
