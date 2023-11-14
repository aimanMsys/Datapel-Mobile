import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferBinDestinationPage } from './transfer-bin-destination.page';

const routes: Routes = [
  {
    path: '',
    component: TransferBinDestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferBinDestinationPageRoutingModule {}
