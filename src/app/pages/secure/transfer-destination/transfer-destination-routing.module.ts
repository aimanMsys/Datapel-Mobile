import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferDestinationPage } from './transfer-destination.page';

const routes: Routes = [
  {
    path: '',
    component: TransferDestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferDestinationPageRoutingModule {}
