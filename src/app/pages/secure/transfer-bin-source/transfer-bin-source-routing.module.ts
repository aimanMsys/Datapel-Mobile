import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferBinSourcePage } from './transfer-bin-source.page';

const routes: Routes = [
  {
    path: '',
    component: TransferBinSourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferBinSourcePageRoutingModule {}
