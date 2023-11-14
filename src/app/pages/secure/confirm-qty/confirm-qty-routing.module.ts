import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmQtyPage } from './confirm-qty.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmQtyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmQtyPageRoutingModule {}
