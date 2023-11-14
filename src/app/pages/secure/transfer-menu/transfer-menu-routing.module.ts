import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferMenuPage } from './transfer-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TransferMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferMenuPageRoutingModule {}
