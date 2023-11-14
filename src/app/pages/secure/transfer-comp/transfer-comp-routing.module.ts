import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferCompPage } from './transfer-comp.page';

const routes: Routes = [
  {
    path: '',
    component: TransferCompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferCompPageRoutingModule {}
